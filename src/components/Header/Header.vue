<template>
<div class="container">
  <header class="header">
    <router-link to="/" class="logo">
      <img src="@/assets/img/icon/logo.svg" alt="Logo" />
    </router-link>
    <label class="address">
      <input type="text" class="input input-address" placeholder="Адрес доставки" />
    </label>
    <div class="buttons">
      <button class="button button-primary button-auth" v-if="!getHasAuthorized" @click="authToggle(true)">
        <span class="button-auth-svg"></span>
        <span class="button-text">Войти</span>
      </button>
      <button class="button button-cart" v-if="getHasAuthorized" @click="cartToggle(true)">
        <span class="button-cart-svg"></span>
        <span class="button-text">Корзина</span>
      </button>
      <button class="button button-primary button-out" v-if="getHasAuthorized" @click="unAuthentication(false)">
        <span class="button-text">Выйти</span>
        <span class="button-out-svg"></span>
      </button>
    </div>
  </header>
</div>
</template>

<script>
import './Header.scss'
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters(['getHasAuthorized']),
  },
  methods: {
    ...mapActions(['toggleAuthAction', 'toggleCartAction', 'hasAuthorizedAction']),
    ...mapMutations(['toggleAuthMutation', 'toggleCartMutation', 'hasAuthorizedMutation']),
    authToggle(flag) {
      this.toggleAuthMutation(flag)
    },
    cartToggle(flag) {
      this.toggleCartMutation(flag);
    },
    unAuthentication(flag) {
			this.hasAuthorizedMutation(flag)
			this.toggleAuthMutation(false)
		}
  }
}

</script>

<style scoped>

</style>