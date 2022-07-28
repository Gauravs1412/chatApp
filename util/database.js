const Sequelize = require('sequelize');

const sequelize = new Sequelize('chatApp','admin1','Gaurav@123',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;