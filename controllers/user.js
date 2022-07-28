const User = require('../models/user');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.signup = async(req,res) => {
    try{

        const {name, email, phoneNo,password} = req.body

        console.log(req.body);

        const saltRounds = 10;

        const result = await User.findAll({ where: { email } })
        console.log(result)

        if(result.length > 0){
            return res.json({msg:'user is already created,please log in'})
        }

        const hashedPassword = await bcrypt.hash(password,saltRounds);

        const createUser =await User.create({
            name:name,
            email:email,
            phoneNo:phoneNo,
            password:hashedPassword,
            isadmin:false

        })

        return res.json({msg:`user ${name} with ${email} is created`})


        


    }catch(err){
        console.log(err)
        res.status(500).json({success:false})
    }
}

exports.login = async(req,res) => {
    try {
        
        const { email, password } = req.body;
    //console.log("login",req.body)
        const result=await User.findOne({where:{email}})
        // console.log(result)
        const {name,id}=result
        const password2=result.password
          //console.log(result)
        const boo=await bcrypt.compare(password,password2)
            if (boo==true) {
    
              console.log("It matches! login successfull")
              const token=jwt.sign({ id:id}, 'GauravandAnkit');
              return res.status(200).json({
                name:name,
                email:email,
                token:token,
                msg:'login successfull' 
              })
    
            }
            else {
              console.log("Invalid password!");
              console.log(err)
            }
    
          
    
        } catch (err) {  //403 -forbidden , 404 - not found , 400-bad request,401-unauthoried,402-payment required
            console.log(err)
            return res.status(201).json({msg:"please enter correct password"})
    
        }
    }