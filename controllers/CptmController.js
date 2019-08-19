// const puppeteer = require('puppeteer');

exports.getAllStatus = function(req,res) {

// let cptmUrl = 'http://www.cptm.sp.gov.br/Pages/Home.aspx';
// (async () => {
//     const browser = await puppeteer.launch({ headless: true, args: ['--desktop'] });
//     const page = await browser.newPage();
//     await page.setViewport({ width: 1270, height: 850 });

//     await page.goto(cptmUrl,{waitUntil: 'networkidle2'});
//     // await page.screenshot({ path: 'cptm.png' });

//     // get metro details
//     let cptmData = await page.evaluate(() => {
//         let cptm = [];
//         // get the metro elements
//         let cptmElms = document.querySelectorAll('.situacao_linhas div div')
//         // get the metro data

//         let i = 1;

//         cptmElms.forEach((cptmElement) => {
//             let cptmJson = {};
//             try {
//                 cptmJson.id = i++;
                
//                 if(cptmElement.querySelector('div span.nome_linha').innerText == "RUBI") { cptmJson.line = "7 Rubi"; cptmJson.name = "Linha 7-Rubi"; cptmJson.number = 7; cptmJson.color = "Rubi"; }
                    
//                 if(cptmElement.querySelector('div span.nome_linha').innerText == "DIAMANTE") { cptmJson.line = "8 Diamante"; cptmJson.name = "Linha 8-Diamante"; cptmJson.number = 8; }
                
//                 if(cptmElement.querySelector('div span.nome_linha').innerText == "ESMERALDA") { cptmJson.line = "9 Esmeralda"; cptmJson.name = "Linha 9-Esmeralda"; cptmJson.number = 9; }
                
//                 if(cptmElement.querySelector('div span.nome_linha').innerText == "TURQUESA") { cptmJson.line = "10 Turquesa"; cptmJson.name = "Linha 10-Turquesa"; cptmJson.number = 10; }
                
//                 if(cptmElement.querySelector('div span.nome_linha').innerText == "CORAL") { cptmJson.line = "11 Coral"; cptmJson.name = "Linha 11-Coral"; cptmJson.number = 11; }
                
//                 if(cptmElement.querySelector('div span.nome_linha').innerText == "SAFIRA") { cptmJson.line = "12 Safira"; cptmJson.name = "Linha 12-Safira"; cptmJson.number = 12; }
                
//                 if(cptmElement.querySelector('div span.nome_linha').innerText == "JADE") { cptmJson.line = "13 Jade"; cptmJson.name = "Linha 13-Jade"; cptmJson.number = 13; }

//                 if(cptmElement.querySelector('div span:nth-child(2)').innerText != "Operação Normal") {

//                     cptmJson.status = cptmElement.querySelector('div span:nth-child(2)').innerText;
//                     cptmJson.reason = cptmElement.querySelector('div span:nth-child(2)').getAttribute("data-original-title");
                
//                 } else {

//                     cptmJson.status = "Operação Normal";

//                 }

//                 cptmJson.lastupdate = document.querySelector('#destaques > div.container > div.col-sm-12.col-md-8.situacao_linhas > div > div.ultima_atualizacao').innerText.replace("| Atualizado em: ","");
//             }
//             catch (exception){
//             }
//             cptm.push(cptmJson);
//         });
//         return cptm.reverse().slice(1).reverse();
//     });

//     // console.log(cptmData);
//     res.send(cptmData);

// })();

}

exports.getLineStatus = function(req,res) {

//     let cptmUrl = 'http://www.cptm.sp.gov.br/Pages/Home.aspx';
//     (async () => {
//         const browser = await puppeteer.launch({ headless: true, args: ['--desktop'] });
//         const page = await browser.newPage();
//         await page.setViewport({ width: 1270, height: 850 });
    
//         await page.goto(cptmUrl,{waitUntil: 'networkidle2'});
//         // await page.screenshot({ path: 'cptm.png' });
    
//         // get metro details
//         let cptmData = await page.evaluate(() => {
//             let cptm = [];
//             // get the metro elements
//             let cptmElms = document.querySelectorAll('.situacao_linhas div div')
//             // get the metro data
            
//             let i = 1;

//             cptmElms.forEach((cptmElement) => {
//                 let cptmJson = {};
//                 try {
//                     cptmJson.id = i++;
                    
//                     if(cptmElement.querySelector('div span.nome_linha').innerText == "RUBI") { cptmJson.line = "7 Rubi"; cptmJson.name = "Linha 7-Rubi"; cptmJson.number = 7; cptmJson.color = "Rubi"; }
                    
//                     if(cptmElement.querySelector('div span.nome_linha').innerText == "DIAMANTE") { cptmJson.line = "8 Diamante"; cptmJson.name = "Linha 8-Diamante"; cptmJson.number = 8; }
                    
//                     if(cptmElement.querySelector('div span.nome_linha').innerText == "ESMERALDA") { cptmJson.line = "9 Esmeralda"; cptmJson.name = "Linha 9-Esmeralda"; cptmJson.number = 9; }
                    
//                     if(cptmElement.querySelector('div span.nome_linha').innerText == "TURQUESA") { cptmJson.line = "10 Turquesa"; cptmJson.name = "Linha 10-Turquesa"; cptmJson.number = 10; }
                    
//                     if(cptmElement.querySelector('div span.nome_linha').innerText == "CORAL") { cptmJson.line = "11 Coral"; cptmJson.name = "Linha 11-Coral"; cptmJson.number = 11; }
                    
//                     if(cptmElement.querySelector('div span.nome_linha').innerText == "SAFIRA") { cptmJson.line = "12 Safira"; cptmJson.name = "Linha 12-Safira"; cptmJson.number = 12; }
                    
//                     if(cptmElement.querySelector('div span.nome_linha').innerText == "JADE") { cptmJson.line = "13 Jade"; cptmJson.name = "Linha 13-Jade"; cptmJson.number = 13; }


//                     if(cptmElement.querySelector('div span:nth-child(2)').innerText != "Operação Normal") {

//                         cptmJson.status = cptmElement.querySelector('div span:nth-child(2)').getAttribute("data-original-title");
                    
//                     } else {

//                         cptmJson.status = "Operação Normal";

//                     }

//                     cptmJson.lastupdate = document.querySelector('#destaques > div.container > div.col-sm-12.col-md-8.situacao_linhas > div > div.ultima_atualizacao').innerText.replace("| Atualizado em: ","");
//                 }
//                 catch (exception){
//                 }
//                 cptm.push(cptmJson);
//             });
//             return cptm.reverse().slice(1).reverse();
//         });
    
//         var result = cptmData.filter(obj => {
//             if(req.params.linha == "7") { return obj.id === 1; }
//             if(req.params.linha == "8") { return obj.id === 2; }
//             if(req.params.linha == "9") { return obj.id === 3; }
//             if(req.params.linha == "10") { return obj.id === 5; }
//             if(req.params.linha == "11") { return obj.id === 6; }
//             if(req.params.linha == "12") { return obj.id === 4; }
//             if(req.params.linha == "13") { return obj.id === 4; }
//         })
    
//         // console.log(cptmData);
//         res.send(result);
    
//     })();
    
}