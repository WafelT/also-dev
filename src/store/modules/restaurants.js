import restaurantsData from '@/data/restaurants';

export default {
    actions: {
        async fetchRestaurants(ctx) {
            ctx.commit('updateRestaurants', restaurantsData)
        }
    },
    mutations: {
        updateRestaurants(state, restaurants) {
            state.restaurants = restaurants
        }
    },
    state: {
        restaurants: {},
    },
    getters: {
        allRestaurants(state) {
            return state.restaurants
        }
    },
}