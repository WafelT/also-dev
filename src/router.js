import { createRouter, createWebHashHistory } from 'vue-router';
import TheMain from '@/views/TheMain/TheMain.vue'
import Product from '@/views/Product/Product.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: TheMain, name: 'main' },
        { path: '/products', component: Product, name: 'products' },
    ]
});