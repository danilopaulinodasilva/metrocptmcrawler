const store = require('store');

exports.getAllStatus = function(req,res) {

    console.log('Já que você pediu, o Math.Random() é '+store.get('math')); 
    res.end('Já que você pediu, o Math.Random() é '+store.get('math'));

};

exports.getLineStatus = function(req,res) {

    function getStatusLinhas() {

    axios.get('http://www.metro.sp.gov.br/Sistemas/direto-do-metro-via4/diretodoMetroHome.aspx', {headers: {'Content-Type':'text/plain'}})
    
    .then((res) => {

        store.set('user', Math.random());
        // store.set('user', res.data);

        // const dom = new JSDOM(res.data);
        
        // console.log(dom.window.diretoIframe.getElementsByTagName('script')[0].innerHTML)
        // eval(dom.window.diretoIframe.getElementsByTagName('script')[0].innerHTML);

        // console.log(objArrLinhas[1].id);
        console.log(store.get('user'));

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

    res.end();

};