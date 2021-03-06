const express=require('express');
const router=express.Router();
const USER= require('../models/users');            // yaha odel bnana important hai kyu ki uske bina folder nhi bnta hai because usmein data kaise store hoga wo btana bhi important hai uske bina nhi kaam chlega 
const Main = require('../models/userMain')
const Education=require('../models/userAcademics')

router.get('/api/v1/user',async (req,res) => {
    const user=new USER(req.body)
    await user.save();
    res.send(user);
});

router.get('/api/v1/main',async(req,res) => {
  const main=new Main(req.body)
  await main.save()
  res.send(main)
});

router.get('/api/v1/education', async(req,res)=>{
  const education=new Education(req.body);
  await education.save();
  res.send(education);
})

module.exports=router;
