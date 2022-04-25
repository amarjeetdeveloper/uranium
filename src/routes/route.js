const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")




router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getByDistrict", CowinController.getDistrictSessions)
router.get("/getWeather", CowinController.getWeather)
router.get("/getSortedCities", CowinController.getSortedCities)
router.post("/getSortedCities", CowinController.getSortedCities)
router.post("/getmemes", CowinController.getmemes)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;