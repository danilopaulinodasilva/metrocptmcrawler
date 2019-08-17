const store = require('store');
const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

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
        console.log("Passou 10 segundos, atualmente o Math.Random() é:",store.get('math'));
        
    })
    
    .catch((err) => {
        console.log(err);
    });
    
}

// DEFINE O INTERVALO DE 10 SEGUNDOS PARA CHAMAR O AXIOS

setInterval(getStatusLinhas,10000);

// É NECESSÁRIO INICIAR A FUNÇÃO, DO CONTRÁRIO TEM QUE SE ESPERAR 10 SEGUNDOS PARA TER A PRIMEIRA RESPOSTA

getStatusLinhas();