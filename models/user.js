const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const User = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:Sequelize.STRING,
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    phoneNo:{
        type:Sequelize.STRING,
        
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false

    },
    isadmin:{
        type:Sequelize.BOOLEAN,
        allowNull:false

    }   
    

})

module.exports = User;