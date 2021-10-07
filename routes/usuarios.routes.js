/*
path: /api/usuarios 
*/

const {Router}= require('express');
const { getUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/usuario.controller');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//rutas de la API proyectos solo hasta el get
router.get('/', validarJWT, getUsuarios);
router.post('/',

    [
        check('nombre', 'EL nombre es obligatorio').not().isEmpty(),
        check('password', 'EL password es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        validarCampos,
    ],
    crearUsuario);
router.put('/:id',
    [
        validarJWT,
        check('nombre', 'EL nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        validarCampos,
    ],
    actualizarUsuario
);

router.delete('/:id',validarJWT, eliminarUsuario);


module.exports=router;