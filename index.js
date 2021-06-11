require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const filmsRouter = require('./routers/filmsRoutes');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

app.disable("x-powered-by");

require('./db');

app.use('/api/films', filmsRouter);

app.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
});