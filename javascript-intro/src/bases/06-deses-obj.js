
const person = {
    name: 'Tony',
    age: 45,
    codeName: 'IronMan',
    power: 'Dinero'
}

const { name, age, codeName, power='No tiene poder' } = person;

// console.log( name );
// console.log( age );
// console.log( codeName );
// console.log( power );

const createHero = ( { name, age, codeName, power } ) => ({
        id: 1122334455,
        name: name,
        age: age,
        codeName: codeName,
        power: power
    })

console.log( createHero( person ) );