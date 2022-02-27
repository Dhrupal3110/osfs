const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { route } = require("./rejestration");
const studentUsers = require("../../models/users/S_user");
const JWT_SECRET = "Dhrup@l";

//get student Data
router.get('/getStudents',async(req,res)=>{
    try {
        
        let user=await studentUsers.find().select("-password");
        res.json(user)

    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
})
//get faculty Data
const facultyUsers = require("../../models/users/F_user");
router.get('/getFacultys',async(req,res)=>{
    try {
        
        let user=await facultyUsers.find().select("-password");
        res.json(user)

    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
})
module.exports = router;