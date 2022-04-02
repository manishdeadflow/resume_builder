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
    required:true,
    unique:true,
    trim:true,
    validate(val){
      if(!validator.isEmail(val)) throw new Error("invaild email");
    },
    lowercase:true
  },
  phoneNo:{
    type:String,
    required:true,
    validate(val){
      if(!validator.isMobilePhone(val)) throw new Error("Phone No.invaild");
  }
  },
  state:{
    type:String,
    required:true,
  },
  city:{
    type:String,
    required:true,
  }
});


module.exports = user;
