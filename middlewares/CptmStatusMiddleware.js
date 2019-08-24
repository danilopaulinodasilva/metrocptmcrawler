const store = require('store');

module.exports = {
    
    line: (code) => {
                    
            var arrayAllStatus = store.get('cptmlinestatus');
            
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

        // RETORNA TODOS STATUS QUE ESTÃO NO LOCALSTORAGE

        return store.get('cptmlinestatus');
        
    }
    
}