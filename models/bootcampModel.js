const mongoose = require('mongoose')

//definir esquema bootcamp
const BootcampSchema = new mongoose.Schema({
    name:{
        type: String ,
        unique: true,
        require:[
            true,
            "nombre es requerido"
        ]
    },
    phone:{
        type: Number,
        require:[
            true,
            "Telefono requerido"
        ],
        maxlength: [
            10, "telefono no debe exceder 10 digitos"
        ],
        minlenght :[
            7, "telefono debe tener al amneos 7 digitos"
        ]

    },
    addres:{
        type: String ,
        require:[
            true, 
            "direccion requerida"
        ]
    },
    topics:{
        type : [String],
        enum : [ //el enum es para seleccionar diferentes opciones
            "Backend",
            "Frontend",
            "Devops",
            "AI"
        ]
    },
    createAt : Date
})


module.exports = mongoose.model("Bootcamp", 
                BootcampSchema)