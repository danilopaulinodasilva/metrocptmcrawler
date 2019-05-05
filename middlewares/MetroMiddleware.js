const store = require('store');
const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = function(req,res,next) {

    function getStatusLinhas() {

        axios.get('http://www.metro.sp.gov.br/Sistemas/direto-do-metro-via4/diretodoMetroHome.aspx', {headers: {'Content-Type':'text/plain'}})
        
        .then((res) => {
      
            store.set('math', Math.random());
            // store.set('math', res.data);
      
            const dom = new JSDOM(res.data);
            
            // console.log(dom.window.diretoIframe.getElementsByTagName('script')[0].innerHTML)
            // eval(dom.window.diretoIframe.getElementsByTagName('script')[0].innerHTML);
      
            // console.log(objArrLinhas);
            // console.log(objArrLinhas[1].id);
            console.log(store.get('math'));
      
        })
      
        .catch((err) => {
            console.log(err);
        });
      
    }
      
    function intervalFunc() {
        // console.log("Passou 1 minuto, atualmente o Math.Random() é: ");
        getStatusLinhas();
    }

    var something = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;
                // do something
                setInterval(intervalFunc,3000);
            }
        };
    })();

    something();

    next();

};