const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers.js');

module.exports = function(){
    //Add new client POST
    router.post('/pacientes',
        pacienteController.nuevoCliente
    )
    return router;
}