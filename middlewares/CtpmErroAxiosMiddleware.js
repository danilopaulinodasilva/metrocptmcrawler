const store = require('store');
const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const S = require('string');

// USANDO O AXIOS PEGO O CÓDIGO DO SITE DA CPTM E ARMAZENO NO LOCALSTORAGE PARA SER RE-UTILIZADO DENTRO DA API

function getStatusLinhasCptm(code) {
    
    // FAZ O GET DO CÓDIGO HTML NO SITE DO METRO
    
    axios.get('http://localhost/falhametro/cptm_com_falha.html', {headers: {'Content-Type':'text/plain'}})
    
    .then((res) => {
        
        const dom = new JSDOM(res.data);
        
        // USANDO O "PERIGOSO" EVAL É EXTRAÍDO O CÓDIGO HTML

        eval(dom.window.destaques);
        // console.log(dom.window.destaques.getElementsByClassName("situacao_linhas")[0].innerHTML);
        // console.log(dom.window.destaques.getElementsByClassName("rubi")[0].getElementsByClassName("nome_linha")[0].innerHTML);
        // console.log(dom.window.destaques.getElementsByClassName("col-xs-4").length);

        // CRIA O ARRAY VAZIO

        var statusLinhasJSON = [];
        var divLinha = dom.window.destaques.getElementsByClassName("col-xs-4");

        // LOOP PARA ADICIONAR TODAS AS LINHAS NO ARRAY
        
        for(i=0;i<divLinha.length;i++) {
            statusLinhasJSON.push({
                "linha": S(divLinha[i].getElementsByClassName("nome_linha")[0].innerHTML).capitalize().s,
                "status": divLinha[i].getElementsByTagName("span")[1].innerHTML,
                "mensagem": divLinha[i].getElementsByTagName("span")[1].getAttribute("data-original-title"),
                "codigo": i+7,
                "descricao": ""
            })
        }
        
        console.log(statusLinhasJSON);

        // ARMAZENA TODOS STATUS NO LOCALSTORAGE

        store.set('cptmlinestatus', statusLinhasJSON);

        // ARMAZENA EM UMA VARIAVEL TODOS STATUS PARA SER FILTRADO

        var arrayAllStatus = store.get('cptmlinestatus');
        
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
        // console.log(typeof(store.get('cptmlinestatus')));
        // console.log(store.get('cptmlinestatus'));
        // console.log(pog[1]);
        
    })
    
    .catch((err) => {
        console.log(err);
    });
    
}

// DEFINE O INTERVALO DE 10 SEGUNDOS PARA CHAMAR O AXIOS

setInterval(getStatusLinhasCptm,60000);

// É NECESSÁRIO INICIAR A FUNÇÃO, DO CONTRÁRIO TEM QUE SE ESPERAR 10 SEGUNDOS PARA TER A PRIMEIRA RESPOSTA

getStatusLinhasCptm();