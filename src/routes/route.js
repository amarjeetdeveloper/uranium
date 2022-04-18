const express = require('express');
const router = express.Router();

const batchcontroller= require("../controllers/batchController")
const developercontroller= require("../controllers/developercontroller")

router.post("/createBatch", batchcontroller.createBatch)
router.post("/createdeveloper", developercontroller.createdeveloper)
router.get("/scholarshipdevelopers", developercontroller.scholarshipdevelopers)

router.get("/developers", developercontroller.developers)

module.exports = router;