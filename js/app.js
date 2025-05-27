document.addEventListener('alpine:init', () => {
  Alpine.data('rank', function () {
    return {
      init() {},
      open: false,
      newStop: '',
      newFare: '',
      mainRank: 'Cape Town',
      ranks: this.$persist([
        { destination: 'Belhar', limit: 2, queue: 0, fare: 22, trips: 0, taxis: 4, overallTotal: 0, feedback: '' },
        { destination: 'Parow', limit: 7, queue: 0, fare: 18, trips: 0, taxis: 4, overallTotal: 0, feedback: '' },
        { destination: 'Woodstock', limit: 7, queue: 0, fare: 12, trips: 0, taxis: 4, overallTotal: 0, feedback: '' },
      ]).as('Taxi Rank Details'),

      taxiFull: 'Mini taxi full & can leave the rank',
      taxiNotFull: 'Taxi cannot leave the rank unless full',
      invalidAction: 'Invalid action',
      notAvailable: 'Taxis not available',

      addRoute(stop, fare) {
        stop = stop.trim();
        if (!stop || !fare) return alert("Please enter both destination and fare.");
        if (stop.toLowerCase() === this.mainRank.toLowerCase()) return alert("Destination cannot be the same as the departure point.");
        if (this.ranks.some(r => r.destination.toLowerCase() === stop.toLowerCase())) return alert("This destination already exists.");

        this.ranks.push({ destination: stop, limit: 7, taxiLimit: 1, queue: 0, fare: fare, trips: 0, taxis: 4, overallTotal: 0, feedback: '' });
        this.open = false;
        this.newStop = '';
        this.newFare = '';
      },

      queueInLine(destination) {
        destination.queue++;
        if (destination.queue >= destination.limit) {
          destination.feedback = this.taxiFull;
          setTimeout(() => destination.feedback = '', 3000);
        }
      },

      leaveQueue(destination) {
        if (destination.queue > 0) {
          destination.queue--;
        } else {
          destination.feedback = this.invalidAction;
          setTimeout(() => destination.feedback = '', 3000);
        }
      },

      leave(destination) {
        if (destination.queue < destination.limit) {
          destination.feedback = this.taxiNotFull;
          setTimeout(() => destination.feedback = '', 3000);
        } else if (destination.taxis === 0) {
          destination.feedback = this.notAvailable;
          setTimeout(() => destination.feedback = '', 3000);
        } else {
          destination.trips++;
          destination.taxis--;
          destination.queue = 0;
          this.getTotalFare(destination);
        }
      },

      addTaxi(destination) {
        if (destination.taxis <= 3) destination.taxis++;
      },

      getTotalFare(destination) {
        destination.overallTotal += destination.limit * destination.fare;
      },

      madeADay() {
        return _.sumBy(this.ranks, r => r.overallTotal);
      },

      estimateWaitTime(rank) {
        if (rank.queue >= rank.limit) return 'Taxi is full';
        const peopleNeeded = rank.limit - rank.queue;
        const totalSeconds = peopleNeeded * 30;
        return `${Math.floor(totalSeconds / 60)}m ${totalSeconds % 60}s`;
      }
    }
  });
});