import { createRouter, createWebHashHistory } from 'vue-router';

// import AboutPage from '@/modules/pokemon/pages/AboutPage.vue';
// import ListPage from '@/modules/pokemon/pages/ListPage.vue';
// import PokemonPage from '@/modules/pokemon/pages/PokemonPage.vue';
// import NoPageFound from '@/modules/shared/pages/NoPageFound.vue';''



const routes = [
    { 
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage.vue')
    },
    {
        path: '/pokemonid/:id',
        name: 'pokemon-id', 
        props: (route) => {
            const id = Number( route.params.id );
            return isNaN( id ) ? { id: 1 } : { id };
        },
        component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage.vue') 
    },
    {
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound.vue') 
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
});

export default router;