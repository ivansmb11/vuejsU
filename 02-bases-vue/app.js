const app = Vue.createApp({
    // template: `
    // <h1>Hola Mundo!!!</h1>
    // <p> Desde app.js </p>
    // `

    data() {
        return {
            quote: 'Soy Batman',
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote() {
            
            console.log( 'Hola Mundo' );
            this.author = 'Ivan Mendoza';
            this.capitalize();

        },
        capitalize() {
            this.quote = this.quote.toUpperCase();
        }
    }
})

app.mount('.myApp')