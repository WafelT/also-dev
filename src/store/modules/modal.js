export default {
    actions: {
        toggleAuthAction(ctx, isOpen) {
            ctx.commit('toggleAuthMutation', isOpen);
        },
        toggleCartAction(ctx, isOpen) {
            ctx.commit('toggleAuthMutation', isOpen);
        },
    },
    mutations: {
        toggleAuthMutation(state, isOpen) {
            return state.modalAuth = isOpen;
        },
        toggleCartMutation(state, isOpen) {
            return state.modalCart = isOpen;
        },
    },
    state: {
        modalAuth: false,
        modalCart: false,
    },
    getters: {
        getModalFlagAuth(state) {
            return state.modalAuth
        },
        getModalFlagCart(state) {
            return state.modalCart
        },
    },
}
