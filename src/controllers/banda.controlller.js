const bandaCtrl =[]

const banda = require('../modelos/banda.js');

bandaCtrl.getBanda = async(req,res) => {
    const bandas = await banda.find();
    res.json(bandas);
}

bandaCtrl.createBanda = async(req, res) => {
    const newBanda= new banda(req.body);
    await newBanda.save();
    res.send({message:'Banda creada!!!!!!!!'});
    //console.log(req.body);
}

bandaCtrl.getBandaById = async(req,res)=>{
    const bandas = await banda.findById(req.params.id);
    res.send(bandas);
}

module.exports = bandaCtrl;