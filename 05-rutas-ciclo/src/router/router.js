import { createRouter, createWebHashHistory } from 'vue-router';

// import AboutPage from '@/modules/pokemon/pages/AboutPage.vue';
// import ListPage from '@/modules/pokemon/pages/ListPage.vue';
// import PokemonPage from '@/modules/pokemon/pages/PokemonPage.vue';
// import NoPageFound from '@/modules/shared/pages/NoPageFound.vue';''



const routes = [
    { 
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/layouts/PokemonLayout.vue'),
        children: [
            {
                path: 'home',
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage.vue')
            },
            {
                path: 'about',
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage.vue')
            },
            {
                path: 'pokemonid/:id',
                name: 'pokemon-id', 
                props: (route) => {
                    const id = Number( route.params.id );
                    return isNaN( id ) ? { id: 1 } : { id };
                },
                component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage.vue') 
            },
            { 
                path: '',
                redirect: { name: 'pokemon-about' }
            }
        ]
    },

    {
        path: '/dbz',
        name: 'dbz',
        component: () => import(/* webpackChunkName: "DBZhome" */ '@/modules/dbz/layouts/DragonBallLayout.vue'),
        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "DBZcharacters" */ '@/modules/dbz/pages/Characters.vue')
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/* webpackChunkName: "DBZabout" */ '@/modules/dbz/pages/About.vue')
            },
            { 
                path: '',
                redirect: { name: 'dbz-characters' }
            }
        ]
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