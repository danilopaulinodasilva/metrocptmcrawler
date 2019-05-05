const puppeteer = require('puppeteer');

exports.getAllStatus = function(req,res) {

let metroUrl = 'http://www.metro.sp.gov.br/Sistemas/direto-do-metro-via4/diretodoMetroHome.aspx?id=60d61b0e-e26d-4f31-86d6-993b11e86460&versaoCompleta=1';

(async () => {
    const browser = await puppeteer.launch({ headless: true, args: ['--desktop'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 270, height: 250 });

    await page.goto(metroUrl,{waitUntil: 'networkidle2'});
    // await page.screenshot({ path: 'metro.png' });

    // get metro details
    let metroData = await page.evaluate(() => {
        let metro = [];
        // get the metro elements
        let metroElms = document.querySelectorAll('#statusLinhaMetro li')
        // get the metro data

        let i = 1;

        metroElms.forEach((metroElement) => {
            let metroJson = {};
            try {

                metroJson.id = i++;

                if(metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 1 - Azul") { metroJson.number = 1; metroJson.line = "Linha 1"; metroJson.name = "Linha 1-Azul"; metroJson.color = "Azul"; }

                if(metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 2 - Verde") { metroJson.number = 2; metroJson.line = "Linha 2"; metroJson.name = "Linha 2-Verde"; metroJson.color = "Verde"; }

                if(metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 3 - Vermelha") { metroJson.number = 3; metroJson.line = "Linha 3"; metroJson.name = "Linha 3-Vermelha"; metroJson.color = "Vermelha"; }

                if(metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 4 - Amarela") { metroJson.number = 4; metroJson.line = "Linha 4"; metroJson.name = "Linha 4-Amarela"; metroJson.color = "Amarela"; }

                if(metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 5 - Lilás") { metroJson.number = 5; metroJson.line = "Linha 5"; metroJson.name = "Linha 5-Lilás"; metroJson.color = "Lilás"; }

                if(metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 15 - Prata") { metroJson.number = 15; metroJson.line = "Linha 15"; metroJson.name = "Linha 15-Prata"; metroJson.color = "Prata"; }

                metroJson.status = metroElement.querySelector('div.statusDaLinha > span').innerText;
                
                if(metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 1 - Azul" || metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 2 - Verde" || metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 3 - Vermelha" || metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 15 - Prata") {
                    metroJson.lastupdate = document.querySelector('span#dataAtualizacaoStatus').innerText.replace("Metrô de São Paulo, ","").replace("h","").replace(" às "," ");
                
                } else if(metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 5 - Lilás") {
                    metroJson.lastupdate = document.querySelector('#diretoIframe > span:nth-child(10)').innerText.replace("ViaMobilidade, ","").replace(" às "," ");
                
                } else {
                    metroJson.lastupdate = document.querySelector('#dataAtualizacaoStatusViaQuatro').innerText.replace("ViaQuatro, ","").replace(" às "," ");
                }
            }
            catch (exception){
            }
            metro.push(metroJson);
        });
        return metro;
    });

    // console.log(metroData);
    res.send(metroData);

    // const used = process.memoryUsage();
    
    // for (let key in used) {
    // console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    // }

})();

};

exports.getLineStatus = function(req,res) {

    let metroUrl = 'http://www.metro.sp.gov.br/Sistemas/direto-do-metro-via4/diretodoMetroHome.aspx?id=60d61b0e-e26d-4f31-86d6-993b11e86460&versaoCompleta=1';
    
    (async () => {
        const browser = await puppeteer.launch({ headless: true, args: ['--desktop'] });
        const page = await browser.newPage();
        await page.setViewport({ width: 270, height: 250 });
    
        await page.goto(metroUrl,{waitUntil: 'networkidle2'});
        // await page.screenshot({ path: 'metro.png' });
    
        // get metro details
        let metroData = await page.evaluate(() => {
            let metro = [];
            // get the metro elements
            let metroElms = document.querySelectorAll('#statusLinhaMetro li')
            // get the metro data

            let i = 1;

            metroElms.forEach((metroElement) => {
                let metroJson = {};
                
                try {

                    metroJson.id = i++;
                    metroJson.name = metroElement.querySelector('div.nomeDaLinha > span').innerText;
                    metroJson.status = metroElement.querySelector('div.statusDaLinha > span').innerText;
                    
                    if(metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 1 - Azul") { metroJson.number = 1; metroJson.line = "Linha 1"; metroJson.name = "Linha 1-Azul"; metroJson.color = "Azul"; }

                if(metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 2 - Verde") { metroJson.number = 2; metroJson.line = "Linha 2"; metroJson.name = "Linha 2-Verde"; metroJson.color = "Verde"; }

                if(metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 3 - Vermelha") { metroJson.number = 3; metroJson.line = "Linha 3"; metroJson.name = "Linha 3-Vermelha"; metroJson.color = "Vermelha"; }

                if(metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 4 - Amarela") { metroJson.number = 4; metroJson.line = "Linha 4"; metroJson.name = "Linha 4-Amarela"; metroJson.color = "Amarela"; }

                if(metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 5 - Lilás") { metroJson.number = 5; metroJson.line = "Linha 5"; metroJson.name = "Linha 5-Lilás"; metroJson.color = "Lilás"; }

                if(metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 15 - Prata") { metroJson.number = 15; metroJson.line = "Linha 15"; metroJson.name = "Linha 15-Prata"; metroJson.color = "Prata"; }

                metroJson.status = metroElement.querySelector('div.statusDaLinha > span').innerText;
                
                if(metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 1 - Azul" || metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 2 - Verde" || metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 3 - Vermelha" || metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 15 - Prata") {
                    metroJson.lastupdate = document.querySelector('span#dataAtualizacaoStatus').innerText.replace("Metrô de São Paulo, ","").replace("h","").replace(" às "," ");
                
                } else if(metroElement.querySelector('div.nomeDaLinha > span').innerText == "Linha 5 - Lilás") {
                    metroJson.lastupdate = document.querySelector('#diretoIframe > span:nth-child(10)').innerText.replace("ViaMobilidade, ","").replace(" às "," ");
                
                } else {
                    metroJson.lastupdate = document.querySelector('#dataAtualizacaoStatusViaQuatro').innerText.replace("ViaQuatro, ","").replace(" às "," ");
                }
                
                }
                catch (exception){
                }
                metro.push(metroJson);
            });
            return metro;
        });

        var result = metroData.filter(obj => {
            if(req.params.linha == "1") { return obj.id === 1; }
            if(req.params.linha == "2") { return obj.id === 2; }
            if(req.params.linha == "3") { return obj.id === 3; }
            if(req.params.linha == "4") { return obj.id === 5; }
            if(req.params.linha == "5") { return obj.id === 6; }
            if(req.params.linha == "15") { return obj.id === 4; }
        })
    
        // console.log(metroData);
        res.send(result);
    
    })();
    
};