// Inseriamo un input per visualizzare in pagina un testo inserito da un utente.
// Inseriamo una immagine e accanto un numero che identifica il numero di prodotti desiderati, i dati devono venire da Vue.
// Poi aggiungiamo un pulsante per aumentare questo numero.

const app = new Vue({
    el: '#app',

    data: {
        message: 'Hello World',
        image: 'https://picsum.photos/300/300',
        text: '',
        productImg: 'https://picsum.photos/300/200',
        product: 0
    },

    methods: {
        add: function () {
            return this.product += 1
        }
    }
})