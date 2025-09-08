// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import App from './App.vue'
// import router from './router'           
// import { Icon } from '@iconify/vue'
// import './assets/main.css'

// const app = createApp(App)

// app.component('Icon', Icon)
// app.use(createPinia())
// app.use(router)                         
// app.mount('#app')

// // src/main.js
// import { createApp } from "vue";
// import App from "@/App.vue";
// import router from "./router"; // if you’re using Vue Router
// import "./style.css"; // optional global styles

// createApp(App).use(router).mount("#app");


// src/main.js
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue"; // use ./ instead of @ unless alias is configured
import router from "./router";
import { Icon } from "@iconify/vue";
import "./assets/main.css"; // make sure this file exists

const app = createApp(App);

app.component("Icon", Icon);
app.use(createPinia());
app.use(router);

app.mount("#app");


