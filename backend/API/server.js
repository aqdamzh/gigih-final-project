require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const mongoString = process.env.DATABASE_URL;
const port = process.env.PORT;

mongoose.connect(mongoString).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log(`Error connection to database. \n${err}`);
});
const database = mongoose.connection;

database.on('error', (err) => {
    console.log(err);
});
database.once('connected', () => {
    console.log('Database connected');
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});