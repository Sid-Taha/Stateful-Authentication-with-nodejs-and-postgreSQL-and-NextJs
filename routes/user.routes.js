const express = require("express")
const {signupFunction, loginFunction, homeFunction, logoutFunction} = require("../controllers/user.controller")
const {sessionCheckMiddleware} = require("../middlewares/sessionCheck.middleware")
const router = express.Router()

// ---------------------- Signup
router.post("/signup", signupFunction)

// ---------------------- Log in
router.post("/login", loginFunction)

// ---------------------- Home
router.get("/home", sessionCheckMiddleware ,homeFunction)

// ---------------------- Logout
router.post("/logout", logoutFunction)


module.exports = router