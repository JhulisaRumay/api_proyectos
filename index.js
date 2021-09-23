const express = require('express'); //sintaxis de importación nodejs
const {dbConection} = require('./config/database');
require('dotenv').config();
const cors=require('cors');

//creaando el servidor express
const app = express();

//configurar cors

app.use(cors());

//Estableciendo sesión a la BD
dbConection();
//console.log(process.env);

//rutas de la API proyectos
app.get('/', (req,res)=>{
    res.status(400).json({
        ok:true,
        msg:'Bienvenidos a NodeJS'
    })
})
//codigo para desplegar el servidor

app.listen(process.env.PORT,()=>{
    console.log('Servidor desplegado en el puerto ' + process.env.PORT)
})