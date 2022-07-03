import Vue from 'vue';
import Vuex from 'vuex';

import partners from '@/store/modules/partners';
import restaurants from '@/store/modules/restaurants';
import modal from './modules/modal';
import authoriztion from './modules/authoriztion';

export default new Vuex.Store({
    modules: {
        partners,
        modal,
        authoriztion,
        restaurants
    }
})