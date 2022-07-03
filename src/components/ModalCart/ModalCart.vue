<template>
	<div class="modal modal-cart" @click="cartToggle(false)">
		<div @click.stop class="modal-dialog">
			<div class="modal-header">
				<h3 class="modal-title">Корзина</h3>
				<button class="close" @click="cartToggle(false)">&times;</button>
			</div>
			<!-- /.modal-header -->
			<div class="modal-body">
				<div class="food-row">
					<span class="food-name">Ролл угорь стандарт</span>
					<strong class="food-price">250 ₽</strong>
					<div class="food-counter">
						<button class="counter-button">-</button>
						<span class="counter">1</span>
						<button class="counter-button">+</button>
					</div>
				</div>
				<!-- /.foods-row -->
				<div class="food-row">
					<span class="food-name">Ролл угорь стандарт</span>
					<strong class="food-price">250 ₽</strong>
					<div class="food-counter">
						<button class="counter-button">-</button>
						<span class="counter">1</span>
						<button class="counter-button">+</button>
					</div>
				</div>
				<!-- /.foods-row -->
				<div class="food-row">
					<span class="food-name">Ролл угорь стандарт</span>
					<strong class="food-price">250 ₽</strong>
					<div class="food-counter">
						<button class="counter-button">-</button>
						<span class="counter">1</span>
						<button class="counter-button">+</button>
					</div>
				</div>
				<!-- /.foods-row -->
				<div class="food-row">
					<span class="food-name">Ролл угорь стандарт</span>
					<strong class="food-price">250 ₽</strong>
					<div class="food-counter">
						<button class="counter-button">-</button>
						<span class="counter">1</span>
						<button class="counter-button">+</button>
					</div>
				</div>
				<!-- /.foods-row -->
			</div>
			<!-- /.modal-body -->
			<div class="modal-footer">
				<span class="modal-pricetag">1250 ₽</span>
				<div class="footer-buttons">
					<button class="button button-primary">Оформить заказ</button>
					<button class="button clear-cart" @click="cartToggle(false)">Отмена</button>
				</div>
			</div>
			<!-- /.modal-footer -->
		</div>
		<!-- /.modal-dialog -->
	</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import './ModalCart.scss';

export default {
    name: 'ModalCart',
	methods: {
		...mapActions(['toggleCartActions']),
		...mapMutations(['toggleCartMutation']),
		cartToggle(flag) {
			this.toggleCartMutation(flag)
		},
	}
}
</script>