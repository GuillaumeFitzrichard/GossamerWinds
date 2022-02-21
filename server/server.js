const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const config = require('../config');

const app = express();

const PORT = config.app.port;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../public')));

app.listen(PORT, () => console.log (`Listening on port ${PORT}`));
