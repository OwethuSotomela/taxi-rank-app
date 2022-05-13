document.addEventListener('alpine:init', () => {
    Alpine.data('rank', () => {
        return {
            init() {
                console.log('Hi Oz');
            },
            open: false,
            mainRank: 'Cape Town',
            test() {
                alert('I am testing here!')
            },
            ranks: [
                {
                    destination: 'Belhar',
                    limit: 5,
                    queue: 0,
                    fare: 22,
                    trips: 0,
                    taxis: 4,
                    getTotalFare() {
                        return 3
                    },
                    add() {
                        this.queue++
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
                    destination: 'Nyanga',
                    limit: 5,
                    queue: 0,
                    fare: 22,
                    trips: 0,
                    taxis: 4,
                    getTotalFare() {
                        return 5
                    },
                    add() {
                        this.queue++
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