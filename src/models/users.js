const mongoose = require('mongoose');
const validator=require("validator");

const user=mongoose.model('USER',{
  name:{
    type:String,
    required:true,
    trim:true,
  },
  email:{
    type:String,
    require:true,
    unique:true,
    trim:true,
    validate(val){
      if(!validator.isEmail(val)) throw new Error("invaild email");
    },
    lowercase:true
  }
});

module.exports = user;
