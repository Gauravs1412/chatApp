const express = require('express');

const app = express();

const cors = require('cors')
const sequelize = require('./util/database')

const User = require('./models/user');
const message = require('./models/message');



app.use(express.json())
app.use(cors());



const userRoutes = require('./routes/user')
const messageRoutes = require('./routes/message');

User.hasMany(message);
message.belongsTo(User);


app.use('/user',userRoutes);
app.use('/user',messageRoutes);

sequelize.sync()
  .then(() =>{
    app.listen(3000)
  })
  .catch(err =>{
    console.log(err)
  })













