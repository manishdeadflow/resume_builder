const mongoose = require("mongoose");

const userAcademics = mongoose.model("Academics", {
  ten:{examination: {
    type: String,
  },
  institute: {
    type: String,
    required:true
  },
  year: {
    type: Number,
  },
  cgpa: {
    type: Number,
  },},
  twelth:{
    examination: {
      type: String,
    },
    institute: {
      type: String,
      // required:true
    },
    year: {
      type: Number,
    },
    cgpa: {
      type: Number,
    },
  },
  college:{
    examination: {
      type: String,
    },
    institute: {
      type: String,
      // required:true
    },
    year: {
      type: Number,
    },
    cgpa: {
      type: Number,
    },
  }


});

module.exports = userAcademics;
