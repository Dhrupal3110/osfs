const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const fatchuser = require("../middleware/fatchuser");
const JWT_SECRET = "Dhrup@l";
const orgUser = require("../../models/users/Org_user");
router.post(
    "/orglogin",
    [body("email").isEmail(), body("password").isLength({ min: 5 })],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
       let success=false;
      const { email, password } = req.body;
      try {
        let user = await orgUser.findOne({ email });
        if (!user) {
          res
            .status(400)
            .json({ error: "Please try to login with currect creadnentials" });
        }
        const passwordcompare = await bcrypt.compare(password, user.password); //it returns true false
        if (!passwordcompare) {
          res
            .status(400)
            .json({ error: "Please try to login with currect creadnentials" });
        }
        const data = {
          user: {
            id: user.id,
          },
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        //  console.log(authToken);
        success=true;
        res.json({success,authToken});
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error occurd");
      }
    }
  );
  //faculty login
const facultyUsers = require("../../models/users/F_user");

  router.post(
    "/facultylogin",
    [body("email").isEmail(), body("password").isLength({ min: 5 })],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      
      let success=false;

  
      const { email, password } = req.body;
      try {
        let user = await facultyUsers.findOne({ email });
        if (!user) {
          res
            .status(400)
            .json({ error: "Please try to login with currect creadnentials" });
        }
        const passwordcompare = await bcrypt.compare(password, user.password); //it returns true false
        if (!passwordcompare) {
          res
            .status(400)
            .json({ error: "Please try to login with currect creadnentials" });
        }
        const data = {
          user: {
            id: user.id,
          },
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        //  console.log(authToken);
        success=true;
        res.json({success,authToken});
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error occurd");
      }
    }
  );
  //StudentLogin
const studentUsers = require("../../models/users/S_user");

  router.post(
    "/studentlogin",
    [body("email").isEmail(), body("password").isLength({ min: 5 })],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
       
  let success=false;
      const { email, password } = req.body;
      try {
        let user = await studentUsers.findOne({ email });
        if (!user) {
          res
            .status(400)
            .json({ error: "Please try to login with currect creadnentials" });
        }
        const passwordcompare = await bcrypt.compare(password, user.password); //it returns true false
        if (!passwordcompare) {
          res
            .status(400)
            .json({ error: "Please try to login with currect creadnentials" });
        }
        const data = {
          user: {
            id: user.id,
          },
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        //  console.log(authToken);
        success=true;
        res.json({success,authToken});
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error occurd");
      }
    }
  );
  module.exports = router;