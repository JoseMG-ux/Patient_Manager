const Paciente = require('../models/Paciente')
//When create new client
exports.nuevoCliente = async ( req, res, next ) => {
    //Create client object whit rq.body data
    const paciente = new Paciente(req.body)

    try {
        await paciente.save();
        res.json({ mensaje : 'El Cliente se agrego correctamente' });
    } catch (error) {
        console.log(error);
        next();
    };
    
}