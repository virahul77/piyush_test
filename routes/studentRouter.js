const express = require('express');
const Student = require('../models/Student');
const router = express.Router();


router.get('/register',(req,res)=>{
    res.send('welcome')
})
router.post('/register',async(req,res)=> {
    try {
        const {name,email,password,skill,subjects} = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({msg:"provide all fields"});
        }
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
})

router.get('/',async(req,res)=> {
    const students = await Student.find({});
    res.status(200).json(students);
})

module.exports = router;