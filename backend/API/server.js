const path = require('path');
const express = require('express');
const cors = require('cors');
const { connect, disconnect } = require('./config/db.config');
const videoRoutes = require('./routes/videoRoutes');

console.log('environment    ', process.env.ENVIRONMENT);
console.log('PORT    ', process.env.PORT);
console.log('MONGO_CONNECTION_STRING    ', process.env.MONGO_CONNECTION_STRING);
if(process.env.ENVIRONMENT !== 'production') {
    require('dotenv').config()
}

connect();

const app = express();
app.use(express.static(path.join(__dirname, './ui/build')));
app.use(cors());

app.use(express.json());

const apiRoutes = express.Router();
app.use('/api', apiRoutes);

apiRoutes.use('/videos', videoRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './ui/build/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});