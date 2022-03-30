
import axios from 'axios';

const apiKey = '9aZwlB0IJBjD4J6Fg24Z9tyQLPWnonqU'
// `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key:  apiKey
    }
})

export default giphyApi

// giphyApi.get( '/random' )
//     .then( resp => {
        
//         const { data } = resp.data
//         const { url } = data.images.original

//         console.log( url );

//         const img = document.createElement('img')
//         img.src = url // TODO: url

//         document.body.append( img )

//     })