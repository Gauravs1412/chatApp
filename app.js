const express = require('express');

const app = express();

const cors = require('cors')
const sequelize = require('./util/database')



app.use(express.json())
app.use(cors());



const userRoutes = require('./routes/user')


app.use('/user',userRoutes);

sequelize.sync()
  .then(() =>{
    app.listen(3000)
  })
  .catch(err =>{
    console.log(err)
  })













