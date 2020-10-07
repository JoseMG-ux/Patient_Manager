const Paciente = require('../models/Paciente')
//When create new client
exports.nuevoCliente = async ( req, res, next ) => {
    //Create client object whit rq.body data
    const paciente = new Paciente(req.body);

    try {
        await paciente.save();
        res.json({ mensaje : 'El Cliente se agrego correctamente' });
    } catch (error) {
        console.log(error);
        next();
    };
    
}

    //Get all patients
    exports.obtenerPacientes = async (req, res, next) => {
        try {
            const pacientes = await Paciente.find();
            res.json(pacientes);

        } catch (error) {
            console.log(error);
            next();
        }
    }

    //Get expecific patient
    exports.pacienteEspecifico = async (req, res, next) => {
        try {
            const pacienteEs = await Paciente.findById({ _id: req.params.id });
            res.json(pacienteEs);
        } catch (error) {
            console.log(error);
            next();
        }
    }

    //Update register
    exports.actualizarRegistro = async (req, res, next) => {
        try {
            const pacienteUp = await Paciente.findOneAndUpdate({ _id : req.params.id }, req.body, {
                new: true
            });
            res.json(pacienteUp)
        } catch (error) {
            console.log(error);
            next();
        }
    }

    //delete patient
    exports.eliminarRegistro = async (req, res, next) => {
        try {
            await Paciente.findOneAndDelete({ _id : req.params.id });
            res.json({mensaje : 'Registro eliminado'})
        } catch (error) {
            console.log(error);
            next();
        }
    }