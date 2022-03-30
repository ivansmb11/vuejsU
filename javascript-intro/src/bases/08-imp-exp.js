
// import { owners } from './data/heroes.js'

import superHeroes from './../data/heroes'

// const [dc, marvel] = owners
// console.log( dc );
// console.log( marvel );

//getHeroByID ( id )
export const getHeroByID = ( id ) => superHeroes.find( heroe => heroe.id === id )
//funciones de flecha
//find

//getHeroesByOwner ('DC', 'Marvel')
export const getHeroesByOwner = ( owner ) => superHeroes.filter( heroe => heroe.owner === owner)


//INDEX.JS

// import { getHeroByID, getHeroesByOwner } from './bases/08-imp-exp'

// console.log( getHeroByID( 2 ) ); //spiderman


// console.log( getHeroesByOwner( 'Marvel' ) );