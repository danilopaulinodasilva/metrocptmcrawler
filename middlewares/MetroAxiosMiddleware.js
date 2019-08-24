const store = require('store');
const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// USANDO O AXIOS PEGO O CÓDIGO DO SITE DO METRO E ARMAZENO NO LOCALSTORAGE PARA SER RE-UTILIZADO DENTRO DA API

function getStatusLinhasMetro(code) {
    
    // FAZ O GET DO CÓDIGO HTML NO SITE DO METRO
    
    axios.get('http://www.metro.sp.gov.br/Sistemas/direto-do-metro-via4/diretodoMetroHome.aspx', {headers: {'Content-Type':'text/plain'}})
    
    .then((res) => {
        
        const dom = new JSDOM(res.data);
        
        // USANDO O "PERIGOSO" EVAL É EXTRAÍDO O CÓDIGO HTML

        // console.log(dom.window.diretoIframe.getElementsByTagName('script')[0].innerHTML)
        eval(dom.window.diretoIframe.getElementsByTagName('script')[0].innerHTML);

        // CRIA O ARRAY VAZIO

        var statusLinhasJSON = [];

        // LOOP PARA ADICIONAR TODAS AS LINHAS NO ARRAY
        
        for(i=0;i<objArrLinhas.length;i++) {
            statusLinhasJSON.push({
                "id": objArrLinhas[i].id,
                "linha": objArrLinhas[i].linha,
                "status": objArrLinhas[i].status,
                "mensagem": objArrLinhas[i].msgStatus,
                "codigo": objArrLinhas[i].codigo,
                "descricao": objArrLinhas[i].descricao
            })
        }
        
        // ARMAZENA TODOS STATUS NO LOCALSTORAGE

        store.set('metrolinestatus', statusLinhasJSON);

        // ARMAZENA EM UMA VARIAVEL TODOS STATUS PARA SER FILTRADO

        var arrayAllStatus = store.get('metrolinestatus');
        
        // FAZ A PESQUISA DENTRO DO ARRAY

        function filterByLine(array,code) {
            return array.filter(function(line){
                return line.codigo == code;
            })
        };
        
        // RETORNA O STATUS DE ACORDO COM A LINHA PASSADA NO SEGUNDO PARAMETRO

        // console.log(filterByLine(arrayAllStatus,15));

        filterByLine(arrayAllStatus,code);
        
        // console.log("Passou 1 minuto, atualmente o status das linhas é:");
        // console.log(typeof(store.get('metrolinestatus')));
        // console.log(store.get('metrolinestatus'));
        // console.log(pog[1]);
        
    })
    
    .catch((err) => {
        console.log(err);
    });
    
}

// DEFINE O INTERVALO DE 10 SEGUNDOS PARA CHAMAR O AXIOS

setInterval(getStatusLinhasMetro,60000);

// É NECESSÁRIO INICIAR A FUNÇÃO, DO CONTRÁRIO TEM QUE SE ESPERAR 10 SEGUNDOS PARA TER A PRIMEIRA RESPOSTA

getStatusLinhasMetro();