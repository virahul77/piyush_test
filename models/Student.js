const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        min : 3,
        max : 32
    },
    password : {
        type : String,
        required : true,
        min : 5,
        max : 32
    },
    email  : {
        type : String,
        required : true,
        test: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        min : 5,
        max : 32
    },
    skill : {
        type : String,
        default: "javascript"
    },
    subjects: Array
},{timestamps : true});

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;