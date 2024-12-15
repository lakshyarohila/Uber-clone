const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors')
const app = express();
const connectDB = require('./db/db.js');
const Userrouter = require('./routes/user.route.js')
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res) => {
    res.send('Hello World')
});
app.use('/users',Userrouter);



module.exports = app;