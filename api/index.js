const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const log = require('./utils/logging').logger;

const routes = require('./routes');

/* Middleware */
const headers = require('./middleware/headers');

mongoose.connect('mongodb://localhost:27017/recipeDev', {
   useNewUrlParser: true
});

// When successfully connected
mongoose.connection.on('connected', () => {
   log.info('Established Mongoose Default Connection');
});

// When connection throws an error
mongoose.connection.on('error', err => {
   log.error('Mongoose Default Connection Error : ' + err);
});

app.listen(4000, () => {
   log.info('Server running on port 4000');
});

app.use(headers);

let morganLogStyle =
   ':method :url :status :response-time ms - :res[content-length]';

app.use(
   morgan(morganLogStyle, {
      stream: {
         write: str => {
            log.info(str);
         }
      }
   })
);

app.use(express.json());
app.use(bodyParser.json());
app.use('/', routes);
