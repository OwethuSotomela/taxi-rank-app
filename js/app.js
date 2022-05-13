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
                    getTotalFare() {
                        return Number(this.queue) * Number(this.fare)
                    },
                    add() {
                        this.queue++
                        if(this.queue >= 7){
                            alert('Limit reached')
                            // this.limit;
                        }
                    },
                    minus() {
                        this.queue--
                    },
                    leave() {
                        this.trips++
                        this.taxis--
                        this.queue -= this.limit
                    }
                },
                {
                    destination: 'Parow',
                    limit: 7,
                    queue: 0,
                    fare: 18,
                    trips: 0,
                    taxis: 4,
                    getTotalFare() {
                        return Number(this.queue) * Number(this.fare)
                    },
                    add() {
                        this.queue++
                        if(this.queue >= 7){
                            alert('Limit reached')
                        }
                    },
                    minus() {
                        this.queue--
                    },
                    leave() {
                        this.trips++
                        this.taxis--
                        this.queue -= this.limit
                    }
                }, 
                {
                    destination: 'Woodstock',
                    limit: 7,
                    queue: 0,
                    fare: 12,
                    trips: 0,
                    taxis: 4,
                    getTotalFare() {
                        return Number(this.queue) * Number(this.fare)
                    },
                    add() {
                        this.queue++
                        if(this.queue >= 7){
                            alert('Limit reached')
                        }
                    },
                    minus() {
                        this.queue--
                    },
                    leave() {
                        this.trips++
                        this.taxis--
                        this.queue -= this.limit
                    }
                }
            ],
        }
    })
})