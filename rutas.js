const express=require('express');
const aplicacion = express();
const rutasConciertos= require('./rutas/conciertos')
const rutasDeportes= require('./rutas/deportes')

aplicacion.use('/conciertos',rutasConciertos)
aplicacion.use('/deportes',rutasDeportes)
aplicacion.get("/",(peticion,respuesta)=>
{respuesta.send("Pagina de Bienvenida" +`<ul class="list-group">
<li class="list-group-item"><a href="/conciertos/Salsa" class="stretched-link">Conciertos de Salsa</a></li>
<li class="list-group-item"><a href="/conciertos/Tango" class="stretched-link">Conciertos de Tango</a></li>
<li class="list-group-item"><a href="/deportes/futbol" class="stretched-link">Deportes Futbol</a></li>
<li class="list-group-item"><a href="/deportes/baloncesto" class="stretched-link">Deportes Baloncesto</a></li>
</ul>`)
})

aplicacion.listen(8080,()=>{
    console.log("Servidor iniciado");
})