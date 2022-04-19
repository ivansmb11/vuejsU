import { createStore } from 'vuex';
import getRandomInt from '@/helpers/getRandomInt';


export default createStore({
    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastInt: 0
    },
    mutations: {
        increment(state) {
            state.count++;
            state.lastMutation = 'increment';
        },
        incrementBy( state, value ) {
            state.count += value;
            state.lastMutation = 'incrementBy';
            state.lastInt = value;
        },
        setLoading( state, value ) {
            state.isLoading = value;
            state.lastMutation = 'setLoading';
        }
    },

    actions: {
        async incrementRandomInt( { commit } ){
            commit('setLoading', true);
            const randomInt = await getRandomInt();
            commit('incrementBy', randomInt);
            commit('setLoading', false);
        }
    },
    getters: {
        squareCount( state ) {
            return state.count * state.count;
        }
    }
});