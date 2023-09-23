const express = require('express');
const userModel = require('../userModel/userModel')

// exports.getUsers = (req, res) => {
//     const users = userModel.find()
//     .then((users) => {
//          res.json(users);
//     })   
//     .catch((err) => {
//         console.error(err);
//         res.status(500).send('Error Retrieving Data');
//     })
// };

// Handle form data submission
exports.postUsers = async (req, res) => {
    const { name, email, message } = req.body; // Assuming you have name and email fields in your form

    try {
        // Create a new user document and save it to MongoDB
        const newUser = new userModel({ name, email,message });
        await newUser.save();

        res.json({ message: 'User data saved successfully.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error saving user data.' });
    }
};

// exports.postUsers = (req, res)=>{
//     const users = new userModel(req.body);
//     users.save()
//     .then(() => {
//         res.status(201).send('User Created Successfully');
//     })
//     .catch((err) => {
//         console.error(err);
//         res.status(500).send('Unable to store data');
//     })
// };

// exports.getById = (req,res) => {
//     userModel.findById(req.params.id)
//         .then((users) => {
//             if(!users){
//                 return res.status(404).send('User Not Found');
//             }
//             res.json(users);
//         })
//         .catch((err) => {
//             console.error(err);
//             res.status(500).send('Unable to retrieve data');
//         })
// };

// exports.deleteUser = (req,res) => {
//     userModel.findByIdAndDelete(req.params.id)
//         .then((users) => {
//             if (!users) {
//                 return res.status(404).send('User Not Found');
//             }
//             res.status(201).send('User Deleted Successfully');
//         })
//         .catch((err) => {
//             console.error(err);
//             res.status(500).send('Unable to delete user');
//         })
// };