document.addEventListener('alpine:init', () => {
    Alpine.data('rank', () => {
        return {
            init() {
                // console.log('Hi Oz');
            },
            open: false,
            mainRank: 'Cape Town',
            ranks: [
                {
                    destination: 'Belhar',
                    limit: 7,
                    queue: 0,
                    fare: 22,
                    trips: 0,
                    taxis: 4,
                    overallTotal: 0

                },
                {
                    destination: 'Parow',
                    limit: 7,
                    queue: 0,
                    fare: 18,
                    trips: 0,
                    taxis: 4,
                    overallTotal: 0

                },
                {
                    destination: 'Woodstock',
                    limit: 7,
                    queue: 0,
                    fare: 12,
                    trips: 0,
                    taxis: 4,
                    overallTotal: 0

                },
            ],
            addRoute(stop, fare) {

                ranks.push({
                    destination: stop,
                    limit: 7,
                    queue: 0,
                    fare: fare,
                    trips: 0,
                    taxis: 4,
                    overallTotal: 0
                })
                console.log(stop, fare)
            },

            queueInLine(destination) {

                destination.queue++

                if (destination.queue >= 7) {

                    setTimeout(() => {
                        this.feedback = this.taxiFull
                    }, 0000)
                }

            },
            leaveQueue(destination) {

                if (destination.queue >= 1) {
                    destination.queue--
                } else {
                    setTimeout(() => {
                        this.feedback = this.invalidAction
                    }, 0000)
                }

            },
            leave(destination) {

                if (destination.queue <= 6) {
                    setTimeout(() => {
                        this.feedback = this.taxiNotFull
                    })
                } else {
                    destination.trips++
                    destination.taxis--
                    destination.queue -= destination.limit
                    this.getTotalFare(destination)
                }

            },

            taxiFull: 'Mini taxi full & can leave the rank',
            taxiNotFull: 'Taxi cannot leave the rank unless full',
            invalidAction: 'Invalid action',
            feedback: '',

            getTotalFare(destination) {
                let newTotal = destination.limit * destination.fare
                console.log(newTotal)
                destination.overallTotal += newTotal
            },

        }
    })
})