const usuarios = require('../modelos/usuarios.js');
const generos = require('../modelos/generos.js');
const{Schema, model}=require('mongoose')
banda= new Schema({
    nombre:{type:String, required:true},
    pais:{type:String , required:true},
    fecha:{type:String, required:true},
    integrantes:{type:[Schema.Types.ObjectId],ref: 'usuarioS', required:true},
    generos: {type:[Schema.Types.ObjectId], ref: 'Genero', required: true}
},
{
    timestamp:true, 
    versionKey: false
})

module.exports=model('Bandas', banda);