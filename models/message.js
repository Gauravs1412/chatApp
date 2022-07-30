const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const message = sequelize.define('message',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    message:Sequelize.STRING

    
})

module.exports = message;
