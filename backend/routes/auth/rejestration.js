const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const fatchuser = require(".../middleware/fatchuser");
const JWT_SECRET = "Dhrup@l";

//orgUser rejestration

const orgUser = require("../../models/users/Org_user");
router.post(
  "/orgregistration",
  [
    body("instiuteName", "enter velid name ").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check whether the user with this  exisist alredy
    try {
      let success=false;
      let user = await orgUser.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "sorry, user with this email is alredy exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const secpwd = await bcrypt.hash(req.body.password, salt);
      user = await orgUser.create({
        instiuteName: req.body.instiuteName,
        email: req.body.email,
        password: secpwd,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      //  console.log(authToken);
       success=true;
      res.json({success, authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Sorry some error occured");
    }
  }
);

//faculty rejestration
const facultyUsers = require("../../models/users/F_user");
router.post(
  "/facultyregistration",
  [
    body("firstName", "enter velid name ").isLength({ min: 3 }),
    body("lastName", "enter velid name ").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    body("orgCode").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check whether the user with this  exisist alredy
    try {
      let success=false;

      let user = await facultyUsers.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "sorry, user with this email is alredy exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const secpwd = await bcrypt.hash(req.body.password, salt);
      user = await facultyUsers.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        orgCode: req.body.orgCode,
        password: secpwd,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      //  console.log(authToken);
      success=true;
      res.json({ success,authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Sorry some error occured");
    }
  }
);

//Student rejestration

const studentUsers = require("../../models/users/S_user");
router.post(
  "/studentregistration",
  [
    body("firstName", "enter velid name ").isLength({ min: 3 }),
    body("lastName", "enter velid name ").isLength({ min: 3 }),
    body("enrollmentNo").isLength({ min: 12 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    body("orgCode").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check whether the user with this  exisist alredy
    try {
      let success=false;

      let user = await studentUsers.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "sorry, user with this email is alredy exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const secpwd = await bcrypt.hash(req.body.password, salt);
      user = await studentUsers.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        enrollmentNo: req.body.enrollmentNo,
        email: req.body.email,
        orgCode: req.body.orgCode,
        password: secpwd,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      success=true;

     res.json({ success,authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Sorry some error occured");
    }
  }
);

module.exports = router;