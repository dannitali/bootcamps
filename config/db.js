const mongoose = require('mongoose') //dependencia 

const conectarBD = async() => { //funcion
   await mongoose.connect(process.env.MONGO_URL)//metodo para conectar a BD
   console.log("MongoDb Conectado".bgBlue.red)
}

module.exports = conectarBD