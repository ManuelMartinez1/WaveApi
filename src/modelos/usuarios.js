const instrumentos = require('../modelos/instrumento.js');
const generos = require('../modelos/generos.js');
const {Schema, model}=require('mongoose')
usuarioS=new Schema({
    nombre: {type:String, required:false},
    apellido:{type:String, required: false},
    correo: {type:String, required:true},
    contrasena: {type:String, required:true},
    descripcion: {type:String, required:false},
    genero: {type:[Schema.Types.ObjectId],ref:'Genero', required:false},
    instrumento: {type:[Schema.Types.ObjectId],ref:'Instrument', required:false},
    fecha: {type:String, required:false},
    precio: {type:String, required:false},
    calificacion: {type:String, required:false},
    collab: {type:String, required:false},
    localizacion:{type:String, required:false},
    imagePath:{type:String, required: false},
    short:{type:String, required: false}
},
{
    timestamp:true,
    versionKey: false
})
module.exports=model('Usuario', usuarioS);