const express = require('express')
const router = express.Router()

router.get("/futbol",(peticion,respuesta)=>
{respuesta.send("Información de partidos "+`<a href="/" class="stretched-link">Inicio</a>`)
})
router.get("/baloncesto",(peticion,respuesta)=>
{respuesta.send("Información de partidos "+`<a href="/" class="stretched-link">Inicio</a>`)
})

module.exports=router