const store = require('store');
const jsdom = require("jsdom");

module.exports = {
    
    line: (code) => {
                    
            var arrayAllStatus = store.get('metrolinestatus');
            
            // FAZ A PESQUISA DENTRO DO ARRAY
            
            function filterByLine(array,code) {
                return array.filter(function(line){
                    return line.codigo == code;
                })
            };
            
            // RETORNA O STATUS DE ACORDO COM A LINHA PASSADA

            return filterByLine(arrayAllStatus,code);
            
    },
    
    all: () => {

        var tudo = store.get('metrolinestatus');

        return tudo;
        
    }
    
}