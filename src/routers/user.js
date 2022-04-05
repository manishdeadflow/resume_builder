const express=require('express');
const router=express.Router();
const USER= require('../models/users');            // yaha odel bnana important hai kyu ki uske bina folder nhi bnta hai because usmein data kaise store hoga wo btana bhi important hai uske bina nhi kaam chlega 


router.get('/api/v1/user',async (req,res) => {
    const user=new USER(req.body)
    await user.save();
    res.send(user);
});



module.exports=router;