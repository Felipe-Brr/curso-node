// config inicial

const express = require('express')
const mongoose = require('mongoose')
const app = express()

require('dotenv/config');

//forma de ler JSON / midllewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//rotas da api
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial / endpoint
app.get('/', (req,res) =>{

    //mostrar req

    res.json({message: 'Oi Express!'})
})

//entregar uma porta



mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@apicluster.qnetquf.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
.then(() =>{
    console.log("Conectamos ao MongoDB!")
    app.listen(3000)
})
.catch((err) => console.log(err))


