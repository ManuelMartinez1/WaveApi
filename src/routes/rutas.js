const {Router}=require('express');
const router=Router();

//RECETAS
    //const recetas = require('./data.json');
    const usuariosCtrl = require('../controllers/usuario.controller');
    
    router.get('/usuarios/instrumento/:id', usuariosCtrl.getUsuarioByInstrument)

    router.get('/usuarios/alias/', usuariosCtrl.getUsuarioAlias);


    //RUTAS USUARIO
    router.put('/update/usuario/:id', usuariosCtrl.updateUsuario)
    //Actualiza Informacion de usuario por ID

    router.delete('/usuarios/borrar/',usuariosCtrl.deleteUsuarios);
    //Elimina todos los usuarios

    router.get('/usuarios/',usuariosCtrl.getUsuarios);
    //Manda a llamar a todos los usuarios existentes

    router.get('/usuarios/:id',usuariosCtrl.getUsuario);
    //Manda a llamar a usuario por id

    router.delete('/usuarios/borrar/:id', usuariosCtrl.deleteUsuario);
    //Elimina a usuario por id

    router.post('/crear/',usuariosCtrl.createUsuario);
    //Crea un usuario nuevo


    //RUTAS INSTRUMENTO
    const instrumentoCtrl = require ('../controllers/instrumento.controller');

    router.get('/instrumentos/alias/',instrumentoCtrl.getInstrumentoAlias);
    //Manda a llamar a el alias del intrumento

    router.get('/instrumentos/', instrumentoCtrl.getInstrumentos);
    //Manda a llamar a todos los instrumentos existentes

    router.delete('/instrumentos/borrar/', instrumentoCtrl.deleteInstrumentos);
    //Elimina todos los instrumentos (solo se uso como proposito de pruebas)


    const generoCtrl = require('../controllers/generos.controller');

    router.get('/generos/', generoCtrl.getGeneros);
    //Manda a llamar a todos los generos existentes

    //RUTAS BANDA
const bandaCtrl = require('../controllers/banda.controlller');
const usuarios = require('../modelos/usuarios');

    router.post('/banda/crear/',bandaCtrl.createBanda);
    //Crea un nuevo perfil de tipo banda

    router.get('/banda/mostrar/', bandaCtrl.getBanda);
    //muestra todas las bandas en existencia

    router.get('/banda/:id/',bandaCtrl.getBandaById);
    //muestra banda por id

module.exports = router;