const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoute = require('./routes/studentRouter');


const app = express();
//app middleware
app.use(express.json());
app.use(cors());



//Route Middleware
app.use('/api/student',studentRoute);
// app.use('/api/teacher',teacherRoute)


//Connect to DB then start server
const mongoUrl = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
mongoose.set('strictQuery', true);
mongoose.connect(mongoUrl).then(()=>{
    console.log('connected to DB');
    app.listen(PORT,()=>{
        console.log('server started at port 5000');
    })

}).catch((err)=> {
    console.log('error connecting in DB');
})

//cross origin resource policy

