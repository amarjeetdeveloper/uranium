const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth = require("../middlewares/auth")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", auth.validateToken, auth.authoriseToken, userController.getUserData)

router.put("/users/:userId", auth.validateToken, auth.authoriseToken, userController.updateUser)

router.delete("/users/:userId", auth.validateToken, auth.authoriseToken, userController.deleteUser)

module.exports = router;