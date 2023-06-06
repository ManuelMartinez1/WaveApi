const generoCtrl = []

const genero = require('../modelos/generos.js');

generoCtrl.getGeneros = async(req,res)=>{
    const generos = await genero.find();
    res.json(generos);
}



module.exports = generoCtrl;