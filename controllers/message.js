const Message = require('../models/message')


exports.message = async(req,res) => {

    try{

        console.log(req.body)

        const {msg} = req.body

        console.log('message user',req.user)

        const User = req.user;

        const createmessage = await User.createMessage({
            message:msg

        })

        console.log(createmessage);

        return res.status(201).json({msg:"message created succesfully",
    
    createmessage});


    }catch(err){
        console.log(err);
        return res.json({msg:"kuch error hai message.js me"})
    }
}