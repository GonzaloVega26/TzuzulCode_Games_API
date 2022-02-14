const express = require('express')//Express Import
const path = require("path")//Path import (__dirname for path of files)


//Importando las rutas:
const gamesRoutes = require("./routes/games")

function views(document){
    return path.join(__dirname,"views",document)
}

const app = express()


// Middleware
app.use(express.text()) //Raw Text
app.use(express.json()) //JSON
app.use(express.urlencoded({extended:true})) //Forms

//Using routes
app.use(gamesRoutes)

app.get('/',function(peticion,respuesta){
    return respuesta.sendFile(views("index.html"))
})


app.listen(4000,function(){
    console.log("Funcionando... http://localhost:4000")
})