<template>
    <div class="card" v-for="card in cards" :key="card.id">
        <img :src="require(`@/assets/${card.image}`)" alt="image" class="card-image" />
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title card-title-reg">{{ card.name }}</h3>
            </div>
            <!-- /.card-heading -->
            <div class="card-info">
                <div class="ingredients">{{ card.description }}</div>
            </div>
            <!-- /.card-info -->
            <div class="card-buttons">
                <button class="button button-primary button-add-cart">
                    <span class="button-card-text">В корзину</span>
                    <span class="button-cart-svg"></span>
                </button>
                <strong class="card-price-bold">{{ card.price }} ₽</strong>
            </div>
        </div>
        <!-- /.card-text -->
    </div>
</template>

<script>
import './Product.scss';

export default {
    name: 'ProductsCard',
    props: {
        cards: {
			type: Object,
			default: () => {},
		}
    }
}

</script>
