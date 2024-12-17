const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser')
const connectDB = require('./db/db.js');
const Userrouter = require('./routes/user.route.js');
const captaionRouter = require('./routes/captaion.route.js');
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.get('/',(req,res) => {
    res.send('Hello World')
});
app.use('/users',Userrouter);
app.use('/captains',captaionRouter);



module.exports = app;