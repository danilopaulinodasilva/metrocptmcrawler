const express = require('express');
const app = express();

const store = require('store');
const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function getStatusLinhas() {

  axios.get('http://localhost/falha_linha2verde.html', {headers: {'Content-Type':'text/plain'}})
  .then((res) => {

    // store.set('user', Math.random());
    store.set('user', res.data);

    // const dom = new JSDOM(res.data);
    
    // console.log(dom.window.diretoIframe.getElementsByTagName('script')[0].innerHTML)
    // eval(dom.window.diretoIframe.getElementsByTagName('script')[0].innerHTML);

    // console.log(objArrLinhas[1].id);

  })

  .catch((err) => {
    console.log(err);
  });

}

getStatusLinhas();

function intervalFunc() {
  console.log("Passou 1 minuto");
  getStatusLinhas();
}

setInterval(intervalFunc,60000);

app.get('/', function(req,res) {

  // console.log(getStatusLinhas());
  console.log(store.get('user'));
  
  res.end();

});

app.listen(3001, function(){
  console.log("Server rodando na porta 3001");
});