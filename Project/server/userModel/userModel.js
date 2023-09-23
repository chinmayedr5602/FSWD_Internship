const mongoose = require('mongoose');

const userSchemas = new mongoose.Schema({
    name: {
        type: String,
        unique:true
    },
    // age: {
    //     type: Number,
    //     required: true
    // },
    email: {
        type: String,
        unique:true
        //unique: true
    },
    message: {
        type: String,
        //unique: true
    }
});

const userModel = mongoose.model('abce',userSchemas);
module.exports = userModel;