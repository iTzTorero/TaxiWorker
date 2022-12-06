const { log } = require('console');
var path = require('path');
const { nextTick } = require('process');
const Pasajero = require('../modelos/pasajero.js')
const registerRoutes = (app) => {

    //endpoint default
    app.get('/', async (req, res) => {
        // res.send("Hola, desde la ruta GET/");

        res.sendFile(path.resolve('vista/index.html'));


    });

    //metodo para consultar direcciones dependiendo el numero de telefono
    app.get('/pasajero', async (req, res) => {
        const filter = { telefono: req.body.telefono }

        try {
            pasajeroEncontrado = Pasajero.findOne(filter, async (err, pasajero) => {
                if (!pasajero === null) {
                    res.status(201)
                    res.json(pasajero)
                } else {
                    const pasajeroInsertado = new Pasajero({
                        telefono: filter.telefono,
                        direccion: []
                    })
                    await pasajeroInsertado.save()
                    res.status(201)
                    res.json(pasajeroInsertado)
                }
            })
        } catch (err) {

        }
    })

    //metodo para añadir un pasajero nuevo
    app.post('/pasajero', async (req, res, next) => {
        const pasajero = new Pasajero({
            telefono: '6871748530',
            direccion: [{
                calle: 'Alvaro Obregon',
                numero: 1912,
                colonia: 'Tamazula',
                referencia: 'Casa blanca con jardin'
            }]
        })
        try {
            const guardarPasajero = await pasajero.save()
            res.status(201)
            res.json(guardarPasajero)
        } catch (error) {
            res.status(400)
            next(error)
        }
    })

    //metodo para añadir direccion nueva a un pasajero
    app.put('/pasajero', (req, res, next) => {
        const filter = { telefono: '6871748531' }
        try {
            Pasajero.findOne(filter, async(err, pasajero) => {
                res.status(201)
                pasajero.direccion.push({
                    calle: 'Del atardecer',
                    numero: 447,
                    colonia: 'Ciudad Obregon',
                    referencia: 'Casa blanca con jardin'
                })
                const update = { direccion: pasajero.direccion }
                let pasajeroActualizado = await Pasajero.findOneAndUpdate(filter,update,{
                    new: true
                })
                res.json(pasajeroActualizado)

            })
        } catch (error) {

        }
    })


}

module.exports = { registerRoutes };