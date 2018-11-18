var app = new Vue({
    el: '#app',
    data: {
        message: 'hello Vue.js',
        message2: 'Hello <span style="color:red;">Vue.js<span>',
        message3: 'hello Vue.js3',
        message4:  'hello vue js4',
        number: 100,
        ok: true,
        price: 29800
    },
    filters:{
        numberFormat: function(value){
            return value.toLocaleString()
        }
    },

    methods:{
        clickHandler: function(event){
          //alert("aa"); 

            console.log("click")
            this.message = this.message.split('').reverse().join('')
        }
    }
})