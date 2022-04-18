const batchModel= require("../models/batches")

const createBatch= async function (req, res) {
    let batch = req.body
    let batchCreated = await batchModel.create(batch)
    res.send({data: batchCreated})
}

module.exports.createBatch= createBatch