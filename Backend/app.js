const express = require('express')
require('dotenv').config()
const path = require('path')
const app = express()


app.use(express.static('./public'))

const PORT = process.env.PORT


// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'index.html'))
// })


app.all('*', (req,res)=>{
    res.status(404).send('<h1>Webpage Not Available </h1>')
})

app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})

