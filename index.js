const express = require('express')
require('dotenv').config()
const models = require('./models/models')
const router = require('./routers/index')
const sequelize = require('./Db')
const cors = require('cors')

const PORT = process.env.PORT||6000
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)


const start = async()=>{
    try{
        await  sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=> console.log('server starting',PORT))
    }
    catch(e){
        console.log(e)
    }
}

start()