import { defineStore } from 'pinia'

export const useOffersStore = defineStore('offers', {
  state: () => ({
    offers: [
      { id: 1, title: 'Flat 50% on Festive Wear', code: 'FESTIVE50' },
      { id: 2, title: 'Buy 1 Get 1 Free on Accessories', code: 'B1G1' }
    ]
  }),
  actions: {
    addOffer(offer) {
      this.offers.push(offer)
    }
  }
})
