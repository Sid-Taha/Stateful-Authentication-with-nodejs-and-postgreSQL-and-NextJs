const express = require("express")
const {signupFunction, loginFunction} = require("../controllers/user.controller")

const router = express.Router()

// ---------------------- Signup
router.post("/signup", signupFunction)

// ---------------------- Signup
router.post("/login", loginFunction)


module.exports = router