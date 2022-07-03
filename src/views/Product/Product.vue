<template>
	<main class="main">
		<div class="container">
			<section class="menu">
				<div class="section-heading">
					<h2 class="section-title restaurant-title">{{ products.name }}</h2>
					<div class="card-info">
						<div class="rating">{{ products.stars }}</div>
						<div class="price">От {{ products.price }} ₽</div>
						<div class="category">{{ products.kitchen }}</div>
					</div>
				</div>
				<div class="cards cards-menu">
					<product-cards v-if="products.products === 'food-band.json'" :cards="allRestaurants.foodBand"></product-cards>
					<product-cards v-if="products.products === 'pizza-plus.json'" :cards="allRestaurants.pizzaPlus"></product-cards>
					<product-cards v-if="products.products === 'pizza-burger.json'" :cards="allRestaurants.pizzaBurger"></product-cards>
					<product-cards v-if="products.products === 'tanuki.json'" :cards="allRestaurants.tanuki"></product-cards>
					<product-cards v-if="products.products === 'gusi-lebedi.json'" :cards="allRestaurants.gusiLebedi"></product-cards>
					<product-cards v-if="products.products === 'palki-skalki.json'" :cards="allRestaurants.palkiSkalki"></product-cards>
				</div>
			</section>
		</div>
	</main>
</template>

<script>
import './Product.scss';
import ProductCards from './ProductCards.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'Products',
	components: { ProductCards },
	props: {
		
	},
	computed: {
		...mapGetters(['allPartners', 'allRestaurants']),
		products() {
			let result = {}
			let vm = this;
			this.allPartners.map(function(item) {
				if (item.id === vm.$route.query.products) {
					result = item
				}
			})
			return result;
		}
	},
	async mounted() {
		this.fetchPartners();
		this.fetchRestaurants();
	},
	methods: {
		...mapActions(['fetchPartners', 'fetchRestaurants']),
	},
}

</script>
