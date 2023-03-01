import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            isAuthenticated: false,
            user: null,
            token: null,
        };
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
        },
        login(state, user) {
            state.isAuthenticated = true;
            state.user = user;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        checkLocalStorage(state) {
            const token = localStorage.getItem('token');

            if (token) {
                state.token = token;
                state.isAuthenticated = true;
            }
        },
    },
    getters: {
        isAuthenticated: (state) => state.isAuthenticated,
        user: (state) => state.user,
    },
});

store.commit('checkLocalStorage');

export default store;
