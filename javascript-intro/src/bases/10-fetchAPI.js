

const apiKey = '9aZwlB0IJBjD4J6Fg24Z9tyQLPWnonqU'

// https://api.giphy.com/v1/gifs/random?api_key=9aZwlB0IJBjD4J6Fg24Z9tyQLPWnonqU

fetch( `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}` )
    .then( resp => resp.json() )
    .then(({data}) => {
        const { url } = data.images.original;

        const img = document.createElement('img')
        img.src = url

        document.body.append( img )
    })