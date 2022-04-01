<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else>
        <h1>Quien es este Pokemon?</h1>

        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />

        <template v-if="showAnswer">
            <h2>{{ message }}</h2>
            <button @click="newGame">Otra vez</button>
        </template>

    </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions.js';


export default {
    components: { PokemonOptions, PokemonPicture },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions();
            const rndInt = Math.floor( Math.random() * 4 );
            this.pokemon = this.pokemonArr[rndInt];
        },
        checkAnswer ( selectedId ){
            if ( selectedId === this.pokemon.id ) {
                this.showPokemon = true;
                this.showAnswer = true;
                this.message = `✅ Correcto, era ${ this.pokemon.name }.`;
            } else {
                this.showPokemon = true;
                this.showAnswer = true;
                this.message = `❌ Incorrecto, era ${ this.pokemon.name }.`;
            }

        },
        newGame() {
            this.showAnswer = false;
            this.showPokemon = false;
            this.pokemonArr = [];
            this.mixPokemonArray();
        }
    },
    mounted() {
        this.mixPokemonArray();
    }
}
</script>
