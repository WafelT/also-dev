<template>
	<main class="main">
		<div class="container">
			<promo-vue></promo-vue>
			<restaurant :cards="allPartners"></restaurant>
		</div>
	</main>
</template>

<script>
import PromoVue from '@/components/Promo/Promo.vue';
import Restaurant from '@/components/Restaurant/Restaurant.vue';

import './Main.scss';
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'TheMain',
	components: { PromoVue, Restaurant },
	computed: {
		...mapGetters(['allPartners']),
	},
	async mounted() {
		this.fetchPartners();
	},
	methods: {
		...mapActions(['fetchPartners']),
	},
}

</script>