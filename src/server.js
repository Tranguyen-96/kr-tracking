const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index');
const config = require('./config/config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('App is working'));

app.use('/api', routes);

app.listen(config.dev.port, () => console.log(`Hello app listening on port ${config.dev.port}!`));

module.exports = {
    app
}