import partnersData from '@/data/partners';

export default {
    actions: {
        async fetchPartners(ctx) {
            ctx.commit('updatePartners', partnersData)
        }
    },
    mutations: {
        updatePartners(state, partners) {
            state.partners = partners
        }
    },
    state: {
        partners: [],
    },
    getters: {
        allPartners(state) {
            return state.partners
        }
    },
}