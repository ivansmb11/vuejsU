

describe( 'example component', () => {
  test( 'Debe de ser mayor a 10', () => {

    //Arreglar
    const value = 5;

    //Estiulo
    value = value + 2;

    //Observar el resultado
    if ( value > 10) {
      console.log( 'Es mayor a 10' );
      //TODO: BIEN  -  OK
    } else {
      throw `${ value } no es mayor a 10`;
    }
    
  });
});