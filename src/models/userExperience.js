const mongoose = require('mongoose')

const userMain = mongoose.model('Main',{
  course:{
  type:String,
  trim:true
},
  linkedin:{
  type:String,
  trim:true
  },
  github:{
    type:String,
    trim:true
  },
  summary:{
    type:String,
    trim:true,
    required:true
  }
})

module.exports = userMain
