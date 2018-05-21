const express = require('express');

const app = express();
const PORT = 8080;
app.use(express.json());
// const bodyParser = require('body-parser');
// app.use(bodyParser());

// const shopModule = require('./modules/shop');
// shopModule(app);

require('./modules/shop')(app);
app.listen(PORT);
console.log(`Listening on Localhost: ${PORT}`);
