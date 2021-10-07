const {Schema, model} = require('mongoose'); //require para invocar al módulo

//definicion del esquema para la coleccion de usuario

const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required: true //required: sintaxis propia de mongo
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    img:{
        type: String
    },
    role:{
        type:String,
        required : true,
        default: 'USER_ROLE'
    },
    google:{
        type:Boolean,
        default: false
    },
});

UsuarioSchema.method('toJSON', function(){
    const {__v,_id, password,...object} = this.toObject();
    object.uid = _id;
    return object;
})

//se exporta el modelo
//por defecto mongoose  creara un mongodb un documento en plural: usuarios
module.exports= model('Usuario',UsuarioSchema);