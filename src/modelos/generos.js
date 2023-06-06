const {Schema, model} = require('mongoose')
genero = new Schema({
    nombre:{
        type:String,
        required: true, 
        unique: true
    }

});

module.exports = model('Genero', genero);