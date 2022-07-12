const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const URI = 'mongodb://localhost:27017/agentTask';


mongoose.connect(URI)
.then(result => {
console.log('connected');
app.listen(4000,console.log("running"));
})



 const signUp = require('./routes/user/signUp');
 const signIn = require('./routes/user/signIn');
 const item = require('./routes/item/item');

const app = express();


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded());
 app.use(signUp,signIn,item);
