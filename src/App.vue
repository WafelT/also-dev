<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>

  <transition name="modal">
    <modal-auth v-if="getModalFlagAuth"></modal-auth>
  </transition>
  <transition name="modal">
    <modal-cart v-if="getModalFlagCart"></modal-cart>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';
import TheMain from '@/views/TheMain/TheMain.vue'
import TheHeader from './components/Header/Header.vue';
import TheFooter from './components/Footer/Footer.vue';

import ModalAuth from './components/ModalAuth/ModalAuth.vue';
import ModalCart from './components/ModalCart/ModalCart.vue';

import '@/assets/styles/normalize.scss'
import '@/assets/styles/global.scss'

export default {
  name: 'App',
  components: { TheMain, TheHeader, TheFooter, ModalAuth, ModalCart },
  computed: {
    ...mapGetters(['getModalFlagAuth', 'getModalFlagCart', 'getHasAuthorized']),
  },
}

</script>

<style scoped>
  .modal-enter-active,
  .modal-leave-active {
    transition: all 0.4s ease;
  }
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
  .modal-move {
    transition: transform 0.6s ease;
  }
</style>