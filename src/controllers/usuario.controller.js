const usuariosCtrl = []

const instrumento = require('../modelos/instrumento.js');
//con base de datos
const usuario= require('../modelos/usuarios.js')
//con json
//const usuarios=require('../data.json');
usuariosCtrl.getUsuarioAlias = async(req,res)=>{
    const usuarios = await usuario.findOne({'instrumentos._id':'64628942e8b78da2ada81bb7'});
    res.json(usuarios);
}

usuariosCtrl.getUsuarios= async(req,res)=>{
    const usuarios= await usuario.find()
    res.json(usuarios)
}

usuariosCtrl.createUsuario = async(req, res) => {
    const newUsuario= new usuario(req.body);
    await newUsuario.save();
    res.send({message:'Usuario creado:))))'});
    //console.log(req.body);

}

usuariosCtrl.getUsuario=async(req,res)=>{
    const usuarioF=await usuario.findById(req.params.id)
    res.send(usuarioF);
}
usuariosCtrl.deleteUsuarios=async(req,res)=>{
    const usuarioF = await usuario.deleteMany({});
    res.send({message: 'usuarios eliminado', usuarioF});
}

usuariosCtrl.deleteUsuario=async(req,res)=>{
    const usuarioF=await usuario.findByIdAndDelete(req.params.id);
    res.send({message: 'usuario eliminado', usuarioF});
}

usuariosCtrl.updateUsuario=async(req,res)=>{
    const usuarioF=await usuario.findByIdAndUpdate(req.params.id,req.body);
    res.send({message: 'se actualizó el usuario', usuarioF});
}

usuariosCtrl.getUsuarioByInstrument = async (req,res)=>{
    const Instrumento = await instrumento.findOne({_id: req.params.id});

    const usuarios = await usuario.find({
        instrumentos: Instrumento._id
    });
    res.json(usuarios);
}

module.exports = usuariosCtrl;