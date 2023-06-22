const express = require('express');
require('dotenv').config()
const app = express()
const morgan = require('morgan')
const bodyparser = require('body-parser')
const uuid = require('uuid')
const cors = require('cors')
const db = require('./db')

const PORT = process.env.PORT

app.use(morgan('dev'))
app.use(bodyparser.json())

app.use(cors({
    origin: ['http://127.0.0.1:5501'],
    credentials: true
}))


app.use((req,res,next) =>{
    console.log('Entered')
    next()
})


// app.get('/',(req,res)=>{

// })


app.post('/additem', async (req,res)=>{

    const {address,roomtype,price} = req.body

    try{
        
        if(!address) throw Error('Enter your address!')
        if(!roomtype) throw Error('Enter roomtype')
        if(!price) throw Error('Enter roomtype')
    
        const id = uuid.v4()
    
        let sql = `INSERT INTO houses(id,address,roomtype,price) VALUES('${id}','${address}','${roomtype}','${price}')`
        await db.execute(sql)
        res.status(200).json({message:'House added Sucessfully'})
    }

    catch (error) {
        res.status(400).json({ erorr: error.message })
    }


})



app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})
