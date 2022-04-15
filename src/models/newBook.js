const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    _id: ObjectId,
    name: String,
    author: [ {
        type: ObjectId,
        ref: "Author"
          } ],
    price: Number,
    ratings: Number,
    publisher:{
        type:ObjectId,
        ref:"Publisher"
    }
}, { timestamps: true });


module.exports = mongoose.model("LibraryBook", bookSchema)