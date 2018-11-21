Vue.filter('numberFormat_g', function(value){
    return value.toLocaleString()
})

Vue.filter('toUSD', function(jpy){
    return jpy/100 
})

Vue.filter('readMore', function(text, length, suffix){
    return text.substring(0, length) + suffix
})

var app = new Vue({
    el: '#app',  
    data: {
        message: 'hello Vue.js',
        message2: 'Hello <span style="color:red;">Vue.js<span>', 
        message3: 'hello Vue.js3',
        message4:  'hello vue js4',
        number: 100,
        ok: true,
        price: 29800,
        price2: 29800,
        jpyPrice: 298000,
        text:'深海魚は、深海に生息する魚類の総称。一般に、水深200mより深い海域に住む魚類を深海魚と呼んでいる。ただし、成長の過程で生息深度を変える種類 で'
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