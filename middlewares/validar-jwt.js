const jwt=require('jsonwebtoken');

const validarJWT = (req, res, next) =>{
    //leer el token del header
    //x-token es un header personalizado donde se registrara un token valido

    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            ok:false,
            msg:'No hay token en la peticion'
        });
        
    }
    try {
        const {uid} = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;

        next();
    } catch (error) {
        return res.status(401).json({
            ok:false,
            msg:'Token no válido'
        });
    }
}

module.exports ={
    validarJWT
}