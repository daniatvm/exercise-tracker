const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// crear servidor de express.
const app = express();
const port = process.env.PORT || 5000;

//permite que mande peticiones desde React
app.use(cors());
//recibir json en requests.
app.use(express.json());

const uri = process.env.URI;
mongoose.connect(uri,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (err) => {
    if(err) throw 'Ups there was a connection error with MongoDB Atlas.';
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
});

app.use(express.urlencoded({ extended: true }));

//Rutas
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
});