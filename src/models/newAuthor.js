const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId

const newAuthorSchema = new mongoose.Schema( {
    _id: {
    type:ObjectId,
    ref:"LibraryBook"
    },
    author_name: String,
    age:Number,
    address:String,
    rating:Number

}, { timestamps: true });

module.exports = mongoose.model("Author", newAuthorSchema)
    