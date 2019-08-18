const store = require('store');
const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function getStatusLinhasMetro() {
    
    // FAZ O GET DO CÓDIGO HTML NO SITE DO METRO
    
    axios.get('http://www.metro.sp.gov.br/Sistemas/direto-do-metro-via4/diretodoMetroHome.aspx', {headers: {'Content-Type':'text/plain'}})
    
    .then((res) => {
        
        // ARMAZENA NO LOCALSTORAGE
        
        // store.set('math', Math.random());
        // store.set('math', res.data);
        
        const dom = new JSDOM(res.data);
        
        // console.log(dom.window.diretoIframe.getElementsByTagName('script')[0].innerHTML)
        eval(dom.window.diretoIframe.getElementsByTagName('script')[0].innerHTML);
        
        // console.log(objArrLinhas);
        
        // console.log(`${objArrLinhas[0].linha}: ${objArrLinhas[0].status}`); // LINHA 1-AZUL
        // console.log(`${objArrLinhas[1].linha}: ${objArrLinhas[1].status}`); // LINHA 2-VERDE
        // console.log(`${objArrLinhas[2].linha}: ${objArrLinhas[2].status}`); // LINHA 3-VERMELHA
        // console.log(`${objArrLinhas[3].linha}: ${objArrLinhas[3].status}`); // LINHA 5-LILÁS
        // console.log(`${objArrLinhas[4].linha}: ${objArrLinhas[4].status}`); // LINHA 15-PRATA
        
        // var statusLinhasJSON = [
        //     {
        //         "id": objArrLinhas[0].id,
        //         "linha": objArrLinhas[0].linha,
        //         "status": objArrLinhas[0].status,
        //         "codigo": objArrLinhas[0].codigo
        //     },    
        //     {
        //         "id": objArrLinhas[1].id,
        //         "linha": objArrLinhas[1].linha,
        //         "status": objArrLinhas[1].status,
        //         "codigo": objArrLinhas[1].codigo
        //     },
        //     {
        //         "id": objArrLinhas[2].id,
        //         "linha": objArrLinhas[2].linha,
        //         "status": objArrLinhas[2].status,
        //         "codigo": objArrLinhas[2].codigo
        //     },
        //     {
        //         "id": objArrLinhas[3].id,
        //         "linha": objArrLinhas[3].linha,
        //         "status": objArrLinhas[3].status,
        //         "codigo": objArrLinhas[3].codigo
        //     },
        //     {
        //         "id": objArrLinhas[4].id,
        //         "linha": objArrLinhas[4].linha,
        //         "status": objArrLinhas[4].status,
        //         "codigo": objArrLinhas[4].codigo
        //     }];
        
        var statusLinhasJSON = [];
        
        for(i=0;i<objArrLinhas.length;i++) {
            statusLinhasJSON.push({
                "id": objArrLinhas[i].id,
                "linha": objArrLinhas[i].linha,
                "status": objArrLinhas[i].status,
                "codigo": objArrLinhas[i].codigo
            })
        }
        
        store.set('metrolinestatus', statusLinhasJSON);
        
        // console.log("Passou 10 segundos, atualmente o Math.Random() é:",store.get('math'));
        // console.log("Passou 1 minuto, atualmente o status das linhas é:");
        console.log(store.get('metrolinestatus'));
        
    })
    
    .catch((err) => {
        console.log(err);
    });
    
}

// DEFINE O INTERVALO DE 10 SEGUNDOS PARA CHAMAR O AXIOS

setInterval(getStatusLinhasMetro,60000);

// É NECESSÁRIO INICIAR A FUNÇÃO, DO CONTRÁRIO TEM QUE SE ESPERAR 10 SEGUNDOS PARA TER A PRIMEIRA RESPOSTA

getStatusLinhasMetro();