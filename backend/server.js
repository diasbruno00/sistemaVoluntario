import express from 'express'
import { rotas } from './routes.js'

import conexao from "./src/database/conexao.js"


const app = express()

const porta  = 3333
app.use(express.json())
app.use(rotas)


app.listen(porta, ()=>{
    console.log(`App rodando na ${porta}`)
})
