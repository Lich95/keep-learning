export default {
    state() {
        return {
            userName: 'lc'
        }
    },
    mutations: {
        changeUserName(state, name) {
            state.userName = name
        }
    }
}