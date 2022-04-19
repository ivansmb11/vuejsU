<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct Access: {{ $store.state.count }}</h2>
    <h2>Computed: {{ countComputed }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="incrementRandomInt">Random</button>

    <h1>MapState</h1>
    <h2>mapstate: {{ count }}</h2>
    <h2>Last mutation: {{ lastMutation }}</h2>
</template>

<script>

import { mapState } from 'vuex';

export default {

    computed: {
        countComputed() {
            return this.$store.state.count;
        },
        ...mapState(['count', 'lastMutation']),
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation
        // })
        
    },

    methods: {
        increment() {
            this.$store.commit('increment');
        },
        incrementBy() {
            this.$store.commit('incrementBy', 5);
        },
        incrementRandomInt() {
            this.$store.dispatch( 'incrementRandomInt' );
        }
    }
}
</script>
