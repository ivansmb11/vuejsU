const miPromesa = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            reject('Reject en mi promise')
        }, 1000);
    })
}

const medirTiempoAsync = async() => {

    try {
        console.log( 'inicio' );

        const respuesta = await miPromesa()
        console.log( respuesta );

        console.log( 'fin' );

        return 'fin de medir tiempo async'
    
    } catch (error) {
        // return 'catch en medir tiempo async'
        throw 'Error en medir tiempo async'
    }

    
}

medirTiempoAsync()
    .then( valor => console.log( valor ))
    .catch( err => console.log( 'error:',err ))