<template>
   <section id="categories" class="py-16 scroll-mt-20 bg-white text-center">
        <div class="container mx-auto px-4">
            <div class="w-full flex flex-col items-center text-center mb-12">
                <h1 class="text-3xl font-bold text-amber-950 mb-3">Explore our Fashion collection</h1>
                <p class="text-lg text-gray-800 max-w-2xl mx-auto ">Discover Outfits that match your personality</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                <div v-for="(category, index) in categories"
                :key="index" 
                class="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-115">
                
                <div class="h-64 overflow-hidden">
                    <img :src="category.image" alt="category.alt" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>

                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
                    <div class="absolute-0 bottom-0 left-0 p-6">
                        <h3 class="text-xl font-semibold text-white hover:text-black">{{ category.title }}</h3>
                        <p class="text-gray-200 mt-1 hover:text-black">{{ category.description }}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
   </section>
</template>
<script setup>
import { ref } from 'vue';

import product7 from '../assets/women/women.jpeg';
import product8 from '../assets/men.jpeg';
import product9 from '../assets/kids.jpeg';
import product10 from '../assets/Footwear.jpeg';
import product11 from '../assets/Festive.jpeg';
import product12 from '../assets/Jwellery.jpeg';
import product13 from '../assets/Accesories.jpeg';


const categories = ref([
    {image:product7, title: "Women's Collection", description: "Embrace the beauty with our outfits", alt: "Women's Collection"},
    {image:product8, title: "Men's Collection", description: "Grab the attention with our Bold Oufits", alt: "Men's Collection"},
    {image:product9, title: "Kids Collection", description: "Cute little outfits for cute little kids", alt: "Kids Collection"},
    {image:product10, title: "Footwear Collection", description: "Every Step with Confidence Towards the Success", alt: "Footwear Collection"},
    {image:product11 , title: "Festive Collection", description: "Celebrate Your festivals with our new collection", alt: "Festive Collection"},
    {image:product12, title: "Jwellery Collection", description: "Exclusive Jwellery collection must in your bag", alt: "Jwellery Collection"},
    {image:product13, title: "Accesories Collection", description: "Complete your look with minimal Accesories", alt: "Accesories Collection"},
])
</script>