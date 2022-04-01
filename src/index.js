const express = require("express")
require('./db/mongodb.js')
const USER= require('./models/users')

const PORT = process.env.PORT | 3000

const app = express()

app.use(express.json());


app.route('/api/v1/user').get(async (req,res) => {
    const user=new USER(req.body)
    await user.save()
    res.send()
})

app.listen(PORT,()=>{
  console.log(`sever is up onthe port ${PORT}`)}
)
