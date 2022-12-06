const mongoose = require('mongoose')

const pasajeroSchema  = new mongoose.Schema({
    telefono: {
        type: String,
        required:true
    },
    direccion: [{
        calle: String, 
        numero: Number, 
        colonia: String,
        referencia: String,
    }]
})

const Pasajero = mongoose.model('Pasajero', pasajeroSchema)

module.exports = Pasajero