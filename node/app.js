import express from "express";
import cors from 'cors'

//Import la conexcion ala base de datos
import db from "./database/db.js";

import ProductoRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/productos',ProductoRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la base de datos')
} catch (error) {
    console.log('El error de conexión es:${error}')
}


// app.get('/',(req,res)=>{
//     res.send('Hola mundo')
// })
app.listen(8000,()=>{
    console.log('Server UP running in http://localhost:8000/')
})