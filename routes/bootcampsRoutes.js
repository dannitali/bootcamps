const express = require ('express') //esta sirve para el framework
const BootcampModel = require('../models/bootcampModel')
const bootcampModel = require('../models/bootcampModel')


//definir el ruteador (mecanimso que permite crear rutas-uri sin necesidad de vincularlas al objeto app) 
const router = express.Router()


//traer todos los bootcamps 
router.get('/', async(req, res) =>{
    //utilizar el modelo para seleccionar todos los bootcamps que hay en la bd 
    const bootcamps=
    await BootcampModel.find()


    res.json({
        sucess : true, 
        data: bootcamps
    })
})



//traer un bootcampo por id 
//enpoint 
router.get('/:id', async (req, res) =>{

    //extraer el id el bootcamp del parametro de la url
    bootcampId = req.params.id
    const bootcamp = 
        await BootcampModel.findById(bootcampId)


    res.json({
        sucess : true, 
        data : bootcamp
    })
})


//CREAR UN BOOTCAMPS:
router.post('/', async (req, res) =>{
    //

    const newBootcamp =
    await bootcampModel.create(req.body)
        res.json({
        sucess : true, 
        data : newBootcamp
    })
})


//ACTUALIZAR UN BOOTCAMP POR ID
router.put('/:id', async(req, res) =>{

    const bootcampId = req.params.id
    const updBootcamp=
            await bootcampModel.findByIdAndUpdate(bootcampId,req.body, 
                {
                    new: true //esta linea sirve para que se muestre el nuevo id actualizado
                })

    res.json({
        sucess : true, 
        data : updBootcamp
    })
})


//ELIMINAR UN BOOTCAMP:
router.delete('/:id', async (req, res) =>{
    const bootcampId = req.params.id
    const delBootcamp=
    await bootcampModel.findByIdAndDelete(bootcampId)

    res.json({
        sucess : true, 
        data : delBootcamp
    })
})


module.exports = router