const express= require('express')
const dotenv = require('dotenv')
const color=require('colors')


//vincular el archivo .env

dotenv.config(
    {path : './config/.env'} // el ./ nos permite ingresar a una carpeta desde la raiz
)
//construir el objeto de la aplicacion app:
app = express()



//RUTAS DE BOOTCAMPS:
//enpoint 
app.get('/bootcamps', (req, res) =>{
    res.json({
        sucess : true, 
        msg: "aqui se mostraran todos los bootcamps"
    })
})

//traer un bootcampo por id 
//enpoint 
app.get('/bootcamps/:id', (req, res) =>{
    res.json({
        sucess : true, 
        msg:`aqui se mostraran bootcampsc cuyo id es ${req.params.id}`
    })
})


//CREAR UN BOOTCAMPS:
app.post('/bootcamps', (req, res) =>{
    res.json({
        sucess : true, 
        msg: "aqui se creara un bootcamp"
    })
})


//ACTUALIZAR UN BOOTCAMP POR ID
app.put('/bootcamps/:id', (req, res) =>{
    res.json({
        sucess : true, 
        msg:`aqui se editar el bootcampsc cuyo id es ${req.params.id}`
    })
})


//ELIMINAR UN BOOTCAMP:
app.delete('/bootcamps/:id', (req, res) =>{
    res.json({
        sucess : true, 
        msg: `aqui se eliminara un bootcamp cuyo id es : ${req.params.id}`
    })
})




//----------------------------------------------------------------------------------------------------------------------------------------------
//ENPONTS USUARIOS:
//MOSTRAR TODOS LOS USUARIOS
app.get('/usuarios', (req, res) =>{
    res.json({
        sucess: true,
        msg : "aqui se mostraran todos los usuarios"
    })
})


//MOSTRAR LOS USUARIOS POR ID
app.get('/usuarios/:id', (req, res) =>{
    res.json({
        sucess : true,
        msg : `aqui se mostraran los usuarios cuyo id es ${req.params.id}`
    })
})



//CREAR UN USUARIO:
app.post('/usuarios', (req, res) =>{
    res.json({
        sucess : true, 
        msg: "aqui se creara un usuario"
    })
})



//ACTUZALIZAR POR ID 
app.put('/usuarios/:id', (req, res) =>{
    res.json({
        sucess : true,
        msg : `aqui se actualizaran los usuarios cuyo id es ${req.params.id}`

    })
})


//ELIMINAR UN UUSARIO POR ID:
app.delete('/usuarios/:id', (req, res) =>{
    res.json({
        sucess : true, 
        msg: `aqui se eliminara un usuario cuyo id es : ${req.params.id}`
    })
})




//----------------------------------------------------------------------------------------------------------------------------------------------
//ENPONTS REVIEWS:
//MOSTRAR TODOS LOS REVIEWS
app.get('/reviews', (req,res)=>{
    res.json({
        sucess:true,
        msg : "aqui se mostraran todos los reviews"
    })
})

//MOSTRAR  LOS REVIEWS POR ID

app.get('/reviews/:id', (req, res)=>{
    res.json({
        sucess:true,
        msg:`aqui se mostraran los reviews cuyo id es : ${req.params.id}`
    })
})


//CREAR
app.post('/reviews',(req,res)=>{
    res.json({
        sucess:true,
        msg :"aqui se creara un review"
    })

})


//ACTUALIZAR POR ID 

app.put('/reviews/:id', (req, res)=>{
    res.json({
        sucess:true,
        msg:`aqui se actualizara el review cuyo id es : ${req.params.id}`
    })
})


//BORRAR POR ID

app.delete('/reviews/:id' , (req, res) =>{
    res.json({
        sucess:true,
        msg:`aqui se eliminara el review cuyo id es : ${req.params.id}`
    })
})



//----------------------------------------------------------------------------------------------------------------------------------------------
//ENPONTS COURSES:
//MOSTRAR TODOS LOS COURSES

app.get('/courses', (req, res)=>{
    res.json({
        sucess:true,
        msg:"Aqui se mostraran todos los courses"
    })
})


//MOSTRAR SOURCES POR ID

app.get('/courses/:id', (req,res)=>{
    res.json({
        sucess:true,
        msg:`aqui se mostrara el courses cuyo id es : ${req.params.id} `
    })
})


//CREAR courses

app.post('/courses', (req,res)=>{
    res.json({
        sucess:true,
        msg:"Aqui se creara el courses"
    })
})


//ACTUALIZAR courses POR ID 

app.put('/courses/:id', (req,res)=>{
    res.json({
        sucess:true,
        msg:`Aqui se actualizara el courses cuyo id es : ${req.params.id}`
    })
})

//ELIMINAR SOURCE

app.delete('/courses/:id', (req,res)=>{
    res.json({
        sucess:true,
        msg:`Aqui se eliminara el course cuyo id es : ${req.params.id}`
    })
})








//construir un servidor :
app.listen(process.env.PUERTO ,() => {
    console.log(`Servidor en ejecucion : ${process.env.PUERTO}`.bgRed.green.bold); //para incrustar alguna variable es con : ${ }, lo ultimo e spar agregar colores a la letra, fondo, etc
})