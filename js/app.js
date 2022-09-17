document.addEventListener('alpine:init', () => {
    Alpine.data('rank', function () {
        return {
            init() {
                // console.log('Hi Oz');
            },
            open: false,
            mainRank: 'Cape Town',
            ranks: this.$persist([
                {
                    destination: 'Belhar',
                    limit: 2,
                    queue: 0,
                    fare: 22,
                    trips: 0,
                    taxis: 4,
                    overallTotal: 0,
                    profit: 0,
                    feedback: '',

                },
                {
                    destination: 'Parow',
                    limit: 7,
                    queue: 0,
                    fare: 18,
                    trips: 0,
                    taxis: 4,
                    overallTotal: 0,
                    profit: 0,
                    feedback: '',

                },
                {
                    destination: 'Woodstock',
                    limit: 7,
                    queue: 0,
                    fare: 12,
                    trips: 0,
                    taxis: 4,
                    overallTotal: 0,
                    profit: 0,
                    feedback: '',

                },
            ]).as('Taxi Rank Details'),
            addRoute(stop, fare) {

                this.ranks.push({
                    destination: stop,
                    limit: 7,
                    taxiLimit: 1,
                    queue: 0,
                    fare: fare,
                    trips: 0,
                    taxis: 4,
                    overallTotal: 0
                })
            },
            queueInLine(destination) {

                destination.queue++
                if (destination.queue >= 7) {

                    setTimeout(() => {
                        destination.feedback = this.taxiFull
                    }, 0000)
                }

            },
            leaveQueue(destination) {

                if (destination.queue >= 1) {
                    destination.queue--
                } else {
                    setTimeout(() => {
                        destination.feedback = this.invalidAction
                    }, 0000)
                }

            },
            leave(destination) {

                console.log(destination)
                console.log(destination.taxi)

                if (destination.queue <= 6) {
                    setTimeout(() => {
                        destination.feedback = this.taxiNotFull
                    })
                } 
                else 
                if
                    (destination.taxis == 0) {
                    destination.feedback = "Taxi not available"
                }

                else {
                    destination.trips++
                    destination.taxis --
                    destination.queue -= destination.limit
                    this.getTotalFare(destination)
                    this.madeADay(destination)
                }
                // here 
                // if(destination.taxiLimit <= 0){
                //     destination.feedback = "There are no taxis to this route at the moment"
                // }

            },

            taxiFull: 'Mini taxi full & can leave the rank',
            taxiNotFull: 'Taxi cannot leave the rank unless full',
            invalidAction: 'Invalid action',

            getTotalFare(destination) {
                let newTotal = destination.limit * destination.fare
                destination.overallTotal += newTotal
            },
            madeADay() {
                return _.sumBy(this.ranks, r => r.overallTotal)
            },
        }
    })
})