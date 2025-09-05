import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [
      { id: 1, name: "Red Dress", category: "Women", price: 1200, offer: "New Arrival" },
      { id: 2, name: "Blue Jeans", category: "Men", price: 1500, offer: "Sale" },
      { id: 3, name: "Sneakers", category: "Footwear", price: 2200, offer: "Trending" },
      // ...add all your products here
    ],
    cart: [],
    wishlist: []
  }),
  getters: {
    getByCategory: (state) => {
      return (category) => state.products.filter(p => p.category === category)
    },
    getByOffer: (state) => {
      return (offer) => state.products.filter(p => p.offer === offer)
    }
  },
  actions: {
    addToCart(product) {
      this.cart.push(product)
    },
    addToWishlist(product) {
      this.wishlist.push(product)
    }
  }
})
