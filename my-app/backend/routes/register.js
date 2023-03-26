const router = require('express').Router();
const users = require('../model/users.models');
router.route('/submit').post((req,res)=>{
    const user = {
        userName : req.body.userName,
        password : req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        phoneNumber : req.body.phoneNumber,
        email : req.body.email
    }

    // users.findOne({username : user.username},(err,doc)=>{
    //     res.json(doc);
    // })
    // return res.status(400).json(user);
    const newUser = new users(user);
    newUser.save()
    .then(()=>res.json('Registration succesfull!!!'))
    .catch((err)=>res.json(err));
})

module.exports = router;