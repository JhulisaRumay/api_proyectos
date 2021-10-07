const express = require('express'); //sintaxis de importación nodejs
const {dbConection} = require('./config/database');
require('dotenv').config();
const cors=require('cors');

//creaando el servidor express
const app = express();

//configurar cors

app.use(cors());

//parciar objetos json
app.use(express.json());

//Estableciendo sesión a la BD
dbConection();
//console.log(process.env);


//rutas de la API proyectos
app.use('/api/usuarios',require('./routes/usuarios.routes'));
app.use('/api/login', require('./routes/auth.routes'));


//codigo para desplegar el servidor

app.listen(process.env.PORT,()=>{
    console.log('Servidor desplegado en el puerto ' + process.env.PORT)
})