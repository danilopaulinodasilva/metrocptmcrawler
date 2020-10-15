// CHAMO OS MIDDLEWARES QUE VÃO FICAR RODANDO SEMPRE NO SERVER
require('./middlewares/MetroAxiosMiddleware.js');
require('./middlewares/CptmAxiosMiddleware.js');

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use("/", express.static('public'));
app.use('/metro', require('./routes/metro'));
app.use('/cptm', require('./routes/cptm'));

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server rodando na porta ${process.env.PORT}`);
});