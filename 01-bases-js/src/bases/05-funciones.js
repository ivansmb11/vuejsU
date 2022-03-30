
// Función antes ECMA6
function saludar1( nombre ) {
    return 'Hola Mundo '+nombre
}

//Anonymous function
const saludar2 = function ( nombre ) {
    return 'Hola Mundo '+nombre
}

// Arrow function ++
const saludar = ( nombre ) => 'Hola Mundo '+nombre

console.log( saludar( 'Ivan ' ) );

const getUser = () => ({ 
    uid: 'ABC123', 
    username: 'Ivansmb11' 
});

console.log( getUser() );

const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}]

const heroe = heroes.find( ( heroe ) => heroe.id === 2 )

console.log( heroe );

