require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect, disconnect } = require('./config/db.config');
const videoRoutes = require('./routes/videoRoutes');

connect();

const app = express();
app.use(cors());

app.use(express.json());

const apiRoutes = express.Router();
app.use('/api', apiRoutes);

apiRoutes.use('/videos', videoRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});