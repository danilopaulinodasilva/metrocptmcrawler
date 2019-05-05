var store = require('store');
var express = require('express');
var app = express();

function intervalFunc() {
    console.log("Passou 5 segundo");
    store.set('user', Math.random());
}
setInterval(intervalFunc,5000);

app.get('/', function(req,res) {

    console.log(store.get('user'));
    res.end();

});

app.listen(3001, function(){
    console.log("Server rodando na porta 3001");
});