const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const equipamentosRouter = require("./routers/equipamentosRouter")
const pool = require('./database/database')
const bodyParser = require("body-parser")
const { builtinModules } = require('module')


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/', function (req, res, next) {
    res.status(200).json({ message: "bem vindo!" })
})

app.use("/equipamentos", equipamentosRouter)



app.listen(PORT, function (err) {
    if (err) {
        throw err
    } else {
        console.log('conectado a porta:', PORT)
    }
});
