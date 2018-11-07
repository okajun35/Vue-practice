var app = new Vue({
    el: '#app',
    data: {
        message: 'hello Vue.js',
        message2: 'Hello <span style="color:red;">Vue.js<span>'
    },

    methods:{
        clickHandler: function(event){
          //alert("aa"); 

            console.log("click")
            this.message = this.message.split('').reverse().join('')
        }
    }
})