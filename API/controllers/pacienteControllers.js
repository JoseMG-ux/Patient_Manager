
//When create new client
exports.nuevoCliente = ( req, res, next ) => {
    -//TODO: Insert in BD
    console.log(req.body)
    res.json({ mensaje : 'El Cliente se agrego correctamente' });
}