import { getHeroByID } from './bases/08-imp-exp'

// console.log( 'Inicio' );

// new Promise( (resolve, reject) => {

//     console.log( 'cuerpo de la promesa' );
//     reject('Promesa resuelta con error');
// })
// .then( msg => console.log( msg ) )
// .catch( (err) => console.log( err ))

// console.log( 'Fin' );

const getHeroByIDAsync = (id) => {
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            const hero = getHeroByID( id );

            if ( hero ) {
                resolve( hero );
            } else {
                reject('Heroe no existe.')
            }
        })

    }, 1000)
}

getHeroByIDAsync( 1 )
    .then( h => {
        console.log(`El heroe es ${ h.name }`)
    })
    .catch( console.log )