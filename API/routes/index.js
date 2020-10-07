const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function(){
    //Add new client POST
    router.post('/pacientes',
        pacienteController.nuevoCliente
    );

    //get all records from the DB
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );

    //get specific patient
    router.get('/pacientes/:id',
        pacienteController.pacienteEspecifico
    );

    //update a record with ID
    router.put('/pacientes/:id', 
        pacienteController.actualizarRegistro
    );

    // //Delete patient for id
    router.delete('/pacientes/:id', 
        pacienteController.eliminarRegistro
    );
    return router;
}
