const express = require('express');
require('./db/config');
const userModel= require('./db/userSchema');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.post('/register',async(req,res)=>{
    const user = new userModel(req.body);
    await user.save().then(item=>{
        res.json({
            'status':true,
            'message':'Registration Successfull'
        })
    }).catch(err=>{
        res.json({
            'status':false,
            'message':err.message
        })
    });
});

app.listen(4001);