const { query } = require("express")
const developerModel= require("../models/developers")
const batchModel= require("../models/batches")

const createdeveloper= async function (req, res) {
    let developer = req.body
    let developerCreated = await developerModel.create(developer)
    res.send({data: developerCreated})
}
                    //  3rd solution
const scholarshipdevelopers= async function (req, res) {
    let developerCreated = await developerModel.find({gender:"female", percentage:{$gte:70}})
    res.send({data: developerCreated})
}

                             // 4th solution
const developers= async function (req, res) {
   const getName = req.query.name
   const getPercentage = req.query.percentage
   const getBatchId = await batchModel.find({name:getName}).select({_id:1})
   const getDeveloper = await developerModel.find({batch:getBatchId, percentage:{$gte:getPercentage}})
  res.send({msg:getDeveloper})
}


module.exports.developers = developers
module.exports.createdeveloper = createdeveloper

module.exports.scholarshipdevelopers = scholarshipdevelopers