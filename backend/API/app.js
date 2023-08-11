const express = require('express');
const videoRoutes = require('./routes/videoRoutes');

const app = express();

app.use(express.json());

const apiRoutes = express.Router();
app.use('/api', apiRoutes);

apiRoutes.use('/videos', videoRoutes);

module.exports = app;