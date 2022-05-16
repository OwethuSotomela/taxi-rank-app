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

                    taxiFull: 'Mini taxi full & can leave the rank',
                    taxiNotFull: 'Taxi cannot leave the rank unless full',
                    invalidAction: 'Invalid action',
                    feedback: '',

                    getTotalFare() {
                        return Number(this.queue) * Number(this.fare)
                    },
                    queueInLine() {
                        this.queue++
                        if (this.queue >= 7) {

                            setTimeout(()=>{
                                this.feedback = this.taxiFull
                            }, 1000)
                        }
                    },
                    leaveQueue() {
                        if (this.queue >= 1) {
                            this.queue--
                        } else {
                            this.feedback = this.invalidAction
                        }
                    },
                    leave() {

                        if (this.queue < 7) {
                            this.feedback = this.taxiFull
                        } else {
                            this.trips++
                            this.taxis--
                            this.queue -= this.limit
                        }

                    }
                },
                {
                    destination: 'Parow',
                    limit: 7,
                    queue: 0,
                    fare: 18,
                    trips: 0,
                    taxis: 4,

                    taxiFull: 'Mini taxi full & can leave the rank',
                    taxiNotFull: 'Taxi cannot leave the rank unless full',
                    invalidAction: 'Invalid action',
                    feedback: '',

                    getTotalFare() {
                        return Number(this.queue) * Number(this.fare)
                    },
                    queueInLine() {
                        this.queue++
                        if (this.queue >= 7) {
                            this.feedback = this.taxiFull
                        }
                    },
                    leaveQueue() {

                        if (this.queue >= 1) {
                            this.queue--
                        } else {
                            this.feedback = this.invalidAction
                        }
                    },
                    leave() {

                        if (this.queue < 7) {
                            this.feedback = this.taxiNotFull
                        } else {
                            this.trips++
                            this.taxis--
                            this.queue -= this.limit
                        }
                    }

                },
                {
                    destination: 'Woodstock',
                    limit: 7,
                    queue: 0,
                    fare: 12,
                    trips: 0,
                    taxis: 4,

                    taxiFull: 'Mini taxi full & can leave the rank',
                    taxiNotFull: 'Taxi cannot leave the rank unless full',
                    invalidAction: 'Invalid action',
                    feedback: '',

                    getTotalFare() {
                        return Number(this.queue) * Number(this.fare)
                    },
                    queueInLine() {
                        this.queue++
                        if (this.queue >= 7) {
                            this.feedback = this.taxiFull
                        }
                    },
                    leaveQueue() {

                        if (this.queue >= 1) {
                            this.queue--
                        } else {
                            this.feedback = this.invalidAction
                        }
                    },
                    leave() {

                        if (this.queue <= 7) {
                            this.feedback = this.taxiNotFull
                        } else {
                            this.trips++
                            this.taxis--
                            this.queue -= this.limit
                        }

                    }
                }
            ],
        }
    })
})