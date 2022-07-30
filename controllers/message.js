const Message = require('../models/message')


exports.message = async(req,res) => {

    try{

        console.log(req.body)

        const {msg} = req.body

        console.log('message user',req.user)

        const User = req.user;

        const {name} = User

        const createmessage = await User.createMessage({
            message:msg

        })

        console.log(createmessage);

        return res.status(201).json({msg:"message created succesfully",
    
   name});


    }catch(err){
        console.log(err);
        return res.json({msg:"kuch error hai message.js me"})
    }
}


exports.getmessage = async(req,res) => {

    const {name} = req.user

    const msg = await req.user.getMessages()

    // console.log(msg)

    res.status(200).json({msg,name,success:true})

}