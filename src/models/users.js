const mongoose = require('mongoose')

const user=mongoose.model('USER',{
  name:{
    type:String
  }
});

module.exports = user;
