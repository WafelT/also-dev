<template>
    <section class="restaurants">
        <div class="section-heading">
            <h2 class="section-title">Рестораны</h2>
            <label class="search">
                <input type="text" class="input input-search" placeholder="Поиск блюд и ресторанов" />
            </label>
        </div>
        <div class="cards cards-restaurants">
            <restaurant-cards 
                :cards="cards"
            ></restaurant-cards>
        </div>
    </section>
</template>

<script>
import RestaurantCards from '@/components/RestaurantCard/RestaurantCards.vue';
import './Restaurant.scss';

export default {
    name: 'Restaurant',
    components: { RestaurantCards },
    props: {
        cards: {
            type: Array,
            default: () => [],
        }
    }
}

</script>