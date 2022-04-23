const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    age: Number,
    posts: {
        type:[],
        default:["you are in the posts"]
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)


// posts: {type: [], deafult: []}