<template>
    <a @click="productClick(card.id)" v-for="card in cards" :key="card.id" class="card card-restaurant">
        <img :src="require(`@/assets/${card.image}`)" class="card-image" />
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title">{{ card.name }}</h3>
                <span class="card-tag tag">{{ card.time_of_delivery }} мин</span>
            </div>
            <!-- /.card-heading -->
            <div class="card-info">
                <div class="rating">{{ card.stars }}</div>
                <div class="price">От {{ card.price }} ₽</div>
                <div class="category">{{ card.kitchen }}</div>
            </div>
        </div>
    </a>
</template>

<script>
import './RestaurantCards.scss';

export default {
    name: 'RestaurantCards',
    props: {
        cards: {
            type: Array,
            default: () => [],
        }
    },
    methods: {
        productClick(id) {
            this.$router.push( {name: 'products', query: {'products': id} })
        }
    }
}

</script>