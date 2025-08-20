<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Sticky Navbar -->
   

    <!-- Page Content -->
    <main class="flex-1 px-6 py-12 max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">
        Your Shopping Cart
      </h1>

      <!-- Empty State -->
      <div
        v-if="cart.items.length === 0"
        class="text-center text-gray-500 py-12"
      >
        <Icon icon="mdi:cart-off" class="w-12 h-12 mx-auto mb-3 text-gray-400" />
        <p>Your cart is empty.</p>
        <router-link
          to="/products"
          class="mt-4 inline-block px-4 py-2 bg-pink-600 text-white text-sm rounded-full hover:bg-pink-500"
        >
          Browse Products
        </router-link>
      </div>

      <!-- Cart Items -->
      <div v-else class="space-y-6">
        <div
          v-for="item in cart.items"
          :key="item.id"
          class="flex items-center justify-between bg-white p-4 rounded-xl shadow-md"
        >
          <div class="flex items-center space-x-4">
            <img
              :src="item.Image"
              :alt="item.name"
              class="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <h2 class="text-lg font-semibold text-gray-800">{{ item.name }}</h2>
              <p class="text-sm text-gray-500">₹{{ item.price }}</p>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center space-x-3 gap-2.5">
            <button
              class="px-2 py-1 bg-gray-200 rounded-full text-pink-900"
              @click="decreaseQuantity(item.id)"
            >
              -
            </button>
            <span class="font-semibold text-pink-950">{{ item.quantity }}</span>
            <button
              class="px-2 py-1 bg-gray-200 rounded-full text-pink-900"
              @click="increaseQuantity(item.id)"
            >
              +
            </button>
            <button
              class="ml-4 text-red-500 hover:text-red-700"
              @click="cart.removeFromCart(item.id)"
            >
              <Icon icon="mdi:delete-outline" class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Cart Summary -->
        <div class="bg-white rounded-xl shadow-md p-6">
          <div class="flex justify-between text-lg font-semibold text-gray-800">
            <span>Total</span>
            <span>₹{{ cart.totalPrice }}</span>
          </div>
          <button
            class="mt-6 w-full bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-500"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </main>

    <!-- Back to Home -->
    <div class="text-center py-6">
      <router-link
        to="/home"
        class="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
      >
        ⬅ Back to Home
      </router-link>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useCartStore } from "@/stores/Cart";

import Footer from "@/components/Footer.vue";


import product from '../assets/women/women1.jpeg';
import product2 from '../assets/perfume1.jpg';
import product3 from '../assets/women/women2.jpeg';
import product4 from '../assets/perfume2.jpg';
import product5 from '../assets/women/women3.jpeg';
import product6 from '../assets/perfume3.jpg';

const products = [
    {id: 1, name: 'Floral', price: 99.99, rating: 4.5, Image: product, discount: 20},
    {id: 2, name: 'Flowry', price: 99.99, rating: 4.8, Image: product2, discount: 15},
    {id: 3, name: 'Levrey', price: 99.99, rating: 4.2, Image: product3, discount: 25},
    {id: 4, name: 'lawrey', price: 99.99, rating: 4.3, Image: product4, discount: 27},
    {id: 5, name: 'polaru', price: 99.99, rating: 4.9, Image: product5, discount: 12},
    {id: 6, name: 'pooluru', price: 99.99, rating: 4.7, Image: product6, discount: 18},
]

const cart = useCartStore();


</script>
