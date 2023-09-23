const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const model = require('./userModel/userModel.js')
const router = require('./routes/routes.js');
// const bodyParser = require('body-parser');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/crud',router)
// app.use(express.static('web'));
// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'web' directory
app.use(express.static('web'));
app.listen(port, () => {
    console.log('Server connection successful at ' + port);
});


const password = '7mjNvZn4YcVxXtD3';

const mongoURL = 'mongodb+srv://bhuvanlpoojari01:7mjNvZn4YcVxXtD3@cluster0.hqgp6md.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoURL,{
    useUnifiedTopology:true,
    usenewUrlParser:true,
}).then(()=>{
    console.log('MongoDB connected successfully!');
})
.catch((err)=>{
    console.log('An Error Occurred',err.message);
})