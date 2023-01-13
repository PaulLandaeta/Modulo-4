const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect('urlDB',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })  
        console.log('Conexion Exitosa');
    } catch (err) {
        console.log(err);
        throw new Error('Erro a la hora de iniciar la base de datos');
    }
}

module.exports = {
    dbConnection
}