const express = require('express')
const app = express()
require("dotenv").config()
const { MongoClient } = require('mongodb')

 
const uri = process.env.MONGO_URI
 
const client = new MongoClient(uri)

// app.get('/',async (run)=> {

  // })

app.get('/',async(req,res)=> {
  try {
    await client.connect()
    await client.db("admin").command({ ping: 1 })
     res.status(200).json({message: "Successfully connected to the database!"})
    console.log("Connected successfully to MongoDB!")
  } catch (error) {
  console.error()
return res.status(500).json({ message: "Failed to connect to the database." })
  }finally {
    await client.close()
  }
})
const PORT = process.env.PORT || 7777
app.listen(PORT, ()=> console.log(`Server is running at http://localhost:${PORT}`))
 
// run().catch(console.dir)