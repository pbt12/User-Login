const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const users = require('./model/users.models');

const url = process.env.ATLAS_URI
const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(url,{});
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('Mongodb connection established');
})
const login = require('./routes/login');
const register = require('./routes/register');
app.use('/register',register);
app.use('/login',login);

app.listen(PORT, ()=>{
    console.log(`Server running at port no : ${PORT}`);
})

