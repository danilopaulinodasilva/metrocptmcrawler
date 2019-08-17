// Chamo o Middleware, que vai ficar rodando sozinho sempre
require('./middlewares/MetroMiddleware.js');

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use("/", express.static('public'));
app.use('/metro', require('./routes/metro'));
app.use('/cptm', require('./routes/cptm'));

app.listen(3001, () => {
  console.log("Server rodando na porta 3001");
});