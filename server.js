import express from 'express';
import Cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';

const app = express();
const API_PORT = process.env.PORT || 3000;

app.use(Cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger('dev'));

require('./routes/registerUser')(app);
require('./routes/loginUser')(app);

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));

module.exports = app;
