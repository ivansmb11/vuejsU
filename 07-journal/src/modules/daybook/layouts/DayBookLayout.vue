<template>
    <NavBar />
</template>

<script>
import { defineAsyncComponent } from 'vue';

    export default {
        components: {
            NavBar: defineAsyncComponent(() => import('../components/NavBar.vue'))
        }
    }
</script>