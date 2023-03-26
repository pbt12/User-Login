const router = require('express').Router();
const users = require('../model/users.models');
router.route('/submit').post((req,res)=>{
    const user = {
        username : req.body.username,
        password : req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        dob : req.body.dob,
        phoneNumber : req.body.phoneNumber
    }

    users.findOne({username : user.username},(err,doc)=>{
        res.json(doc);
    })

    const newUser = new users(user);
    newUser.save()
    .then(res.json('Registration succesfull!!!'))
    .catch((err)=>res.json(err));
})

module.exports = router;