const {Schema, model}=require('mongoose')
instrumento = new Schema({
    nombre:{
        type:String,
        required: true, 
        unique: true
    },
    alias:{
        type:String, 
        required: true, 
    }
});


module.exports = model('Instrument', instrumento);