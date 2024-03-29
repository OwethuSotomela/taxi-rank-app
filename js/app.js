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

                    destination.feedback = this.taxiFull
                    setTimeout(() => {
                        destination.feedback = ""
                    }, 3000)
                }

            },
            leaveQueue(destination) {

                if (destination.queue >= 1) {
                    destination.queue--
                } else {
                    destination.feedback = this.invalidAction
                    setTimeout(() => {
                        destination.feedback = ""
                    }, 0000)
                }

            },
            leave(destination) {

                if (destination.queue <= 6) {
                    destination.feedback = this.taxiNotFull
                    setTimeout(() => {
                        destination.feedback = ""
                    })
                } else if (destination.taxis == 0) {
                    destination.feedback = this.notAvailable
                    setTimeout(() => {
                        destination.feedback = ""
                    }, 3000)
                } else {
                    destination.trips++
                    destination.taxis--
                    destination.queue -= destination.limit
                    this.getTotalFare(destination)
                    this.madeADay(destination)
                }
            },
            addTaxi(taxi) {
                if (taxi.taxis <= 3) {
                    taxi.taxis++
                }
            },

            taxiFull: 'Mini taxi full & can leave the rank',
            taxiNotFull: 'Taxi cannot leave the rank unless full',
            invalidAction: 'Invalid action',
            notAvailable: 'Taxis not available',

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