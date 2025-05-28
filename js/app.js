document.addEventListener('alpine:init', () => {
  Alpine.data('taxiRankApp', () => ({
    openModal: false,
    newStop: '',
    newFare: '',
    ranks: [
      {
        destination: 'Khayelitsha',
        fare: 12,
        queue: 0,
        limit: 12,
        taxis: 1,
        trips: 0,
        overallTotal: 0,
        feedback: ''
      },
      {
        destination: 'Mitchells Plain',
        fare: 10,
        queue: 0,
        limit: 10,
        taxis: 1,
        trips: 0,
        overallTotal: 0,
        feedback: ''
      },
      {
        destination: 'Dunoon',
        fare: 15,
        queue: 0,
        limit: 15,
        taxis: 1,
        trips: 0,
        overallTotal: 0,
        feedback: ''
      }
    ],

    addRank() {
      if (!this.newStop || isNaN(this.newFare) || this.newFare <= 0) {
        alert('Please enter a valid destination and fare.');
        return;
      }

      this.ranks.push({
        destination: this.newStop,
        fare: parseFloat(this.newFare),
        queue: 0,
        limit: 12,
        taxis: 1,
        trips: 0,
        overallTotal: 0,
        feedback: ''
      });

      this.newStop = '';
      this.newFare = '';
      this.openModal = false;
    },

    queue(rank) {
      if (rank.queue < rank.limit) {
        rank.queue++;
        rank.feedback = '';
      } else {
        rank.feedback = 'Queue is full.';
      }
    },

    dequeue(rank) {
      if (rank.queue > 0) {
        rank.queue--;
        rank.feedback = '';
      } else {
        rank.feedback = 'Queue is empty.';
      }
    },

    depart(rank) {
      if (rank.queue >= rank.limit && rank.taxis > 0) {
        rank.queue -= rank.limit;
        rank.taxis--;
        rank.trips++;
        rank.overallTotal += rank.fare * rank.limit;
        rank.feedback = '';
      } else if (rank.taxis === 0) {
        rank.feedback = 'No taxis available.';
      } else {
        rank.feedback = 'Not enough passengers.';
      }
    },

    addTaxi(rank) {
      rank.taxis++;
      rank.feedback = '';
    },

    estimatedWait(rank) {
      const passengersNeeded = rank.limit - rank.queue;
      const waitPerPassenger = 3; // in minutes
      return `${passengersNeeded * waitPerPassenger} mins`;
    },

    totalIncome() {
      return this.ranks.reduce((sum, rank) => sum + rank.overallTotal, 0);
    }
  }));
});