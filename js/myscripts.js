let app = new Vue({
    el: '#app',
    data: {
    email: []
    },

    methods: {
        cicloEmail: function (){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (risposta) => {
            // handle success
            this.email.push(risposta.data.response)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
        },


        creaEmail: function(){
            for ( i = 0; i  < 10; i++) {
                this.cicloEmail()
                this.email= []
            }
        }
}})

































    /*mounted:{ function (){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (risposta) => {
            // handle success
            this.email.push = risposta.data.response
            console.log(this.email)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
        
        },*/
            
    
