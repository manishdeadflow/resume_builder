const express = require("express");
require('./db/mongodb.js');
const router=require('./routers/user');
// const USER= require('./models/users');            // yaha model bnana important hai kyu ki uske bina folder nhi bnta hai because usmein data kaise store hoga wo btana bhi important hai uske bina nhi kaam chlega 


const PORT = process.env.PORT | 3000;

const app = express();

app.use(express.json());                          // yeah isliye likha hai kyu ki information link mein aati hai tohh usko apn json mein convert kr lete hai
app.use(router);                                  // yeah niche rhagega kyu ki phele


app.listen(PORT,()=>{
  console.log(`sever is up onthe port ${PORT}`)}
);
