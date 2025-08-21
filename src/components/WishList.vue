<template>
  <div class="px-4 py-8 max-w-5xl mx-auto">
    <h1 class="text-3xl font-bold text-amber-950 mb-6">Your Wishlist</h1>

    <div v-if="wishlistItems.length === 0" class="text-center text-gray-500">
      <p>No items in your wishlist yet.</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="item in wishlistItems"
        :key="item.id"
        class="flex items-center justify-between bg-white shadow rounded-lg p-4"
      >
      
        <div class="flex items-center gap-2.5 space-x-4">
          <img
            :src="item.Image"
            :alt="item.name"
            class="w-20 h-20 object-cover rounded-lg"
          />
          <div>
            <h2 class="text-lg font-semibold text-gray-800">
              {{ item.name }}
            </h2>
            <p class="text-pink-600 font-bold">₹{{ item.price }}</p>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2 space-x-3">
          <button
            @click="addToCart(item)"
            class="px-3 py-1 bg-pink-500 text-white rounded-lg hover:bg-pink-600 text-sm"
          >
            Add to Cart
          </button>
          <button
            @click="removeFromWishlist(item.id)"
            class="px-3 py-1 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 text-sm"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWishlistStore } from "@/stores/WishList";



import product from '@/assets/women/women1.jpeg';
import product2 from '@/assets/perfume1.jpg';
import product3 from '@/assets/women/women2.jpeg';
import product4 from '@/assets/perfume2.jpg';
import product5 from '@/assets/women/women3.jpeg';
import product6 from '@/assets/perfume3.jpg';





const products = [
    {id: 1, name: 'Floral', price: 99.99, rating: 4.5, Image: product, discount: 20},
    {id: 2, name: 'Flowry', price: 99.99, rating: 4.8, Image: product2, discount: 15},
    {id: 3, name: 'Levrey', price: 99.99, rating: 4.2, Image: product3, discount: 25},
    {id: 4, name: 'lawrey', price: 99.99, rating: 4.3, Image: product4, discount: 27},
    {id: 5, name: 'polaru', price: 99.99, rating: 4.9, Image: product5, discount: 12},
    {id: 6, name: 'pooluru', price: 99.99, rating: 4.7, Image: product6, discount: 18},
]

const wishlistStore = useWishlistStore();
const cartStore = useCartStore()

const wishlistItems = wishlistStore.items;

const addToCart = (item) => {
  cartStore.addToCart(item);
  cartStore.addToCart(item.id);
};

const removeFromWishlist = (item) => {
  wishlistStore.removeFromWishList(item.id);
};
</script>
