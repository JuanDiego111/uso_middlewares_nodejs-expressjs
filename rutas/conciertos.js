const express = require('express')
const router = express.Router()

router.get("/Salsa",(peticion,respuesta)=>
{respuesta.send("Información de conciertos "+`<a href="/" class="stretched-link">Inicio</a>`)
})
router.get("/Tango",(peticion,respuesta)=>
{respuesta.type("html")
respuesta.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>Información de conciertos</h1>
<h1>Información de musica</h1>
<h1>Información de bailes</h1>
<a href="/" class="stretched-link">Inicio</a>
</body>
</html>`)

})

module.exports=router