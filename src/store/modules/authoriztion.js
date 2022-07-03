export default {
    actions: {
        hasAuthorizedAction(ctx, isAuth) {
            ctx.commit('hasAuthorizedMutation', isAuth);
        },
    },
    mutations: {
        hasAuthorizedMutation(state, isAuth) {
            return state.hasAuthorized = isAuth;
        },
    },
    state: {
        hasAuthorized: false,
    },
    getters: {
        getHasAuthorized(state) {
            return state.hasAuthorized
        },
    },
}
