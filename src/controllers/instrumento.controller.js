const instrumentoCtrl = []

const instrumento = require('../modelos/instrumento.js');

instrumentoCtrl.getInstrumentos = async(req,res)=>{
    const instrumentos = await instrumento.find();
    res.json(instrumentos);
}

instrumentoCtrl.getInstrumentoAlias = async(req,res)=>{
    const instrumentos = await instrumento.find({},'alias');
    res.json(instrumentos);
}

instrumentoCtrl.deleteInstrumentos = async(req,res)=>{
    const instrumentos = await instrumento.deleteMany({});
    console.log('${deleteResult.deletedCount} instrumentos deleted.');
}

module.exports = instrumentoCtrl;