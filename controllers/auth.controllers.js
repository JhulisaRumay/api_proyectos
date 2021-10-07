const {response} = require("express");
const bcrypt = require('bcryptjs');
const usuario = require ('../models/usuario.model');
const {generarJWT} = require('../helpers/jwt')


const login = async(req, res= response) =>{
    const { email, password} = req.body;

    try {
        //verificar al usuario por su email

        const usuarioBD = await usuario.findOne({email});

        if(!usuarioBD){
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
                //considerar la utilizacion de este mensaje
            });
        }
        //verificar la contraseña

        const validPassword = bcrypt.compareSync(password,usuarioBD.password);
        if( !validPassword){
            return res.status(400).json({
                ok:false,
                msg:'Contraseña no valida'
            });
        }
        //GENERAR TOKEN
        const token = await generarJWT (usuarioBD.id);

        res.json({
            ok:true,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }
}

module.exports = {
    login
}