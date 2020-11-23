// Native packages
const path = require('path');

const fs = require('fs');

// Third party libraries
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load routes
const routes = require('./router');
const { developmentErrors, productionErrors, notFound } = require('./handlers/errorHandlers');

dotenv.config();

const app = express();

const PORT = process.env.NODE_ENV ? process.env.NODE_ENV : '8080';

// Log only 4xx and 5xx responses to console
app.use(logger('dev', {
	skip: (req, res) => res.statusCode < 400,
}));

// Log all requests to access.log
app.use(logger('common', {
	stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' }),
}));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Route handling
app.use('/api', routes);

// If the routes above didn't catch it, we 404 it and forward it to the error handler
app.use(notFound);

// Otherwise, forward the error to the corresponding error handler given the environment
// eslint-disable-next-line no-unused-expressions
app.get('env') === 'development'
	? app.use(developmentErrors)
	: app.use(productionErrors);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
}).on('error', error => console.error(`Failed to listen to port ${PORT}`, error));

module.exports = app;
