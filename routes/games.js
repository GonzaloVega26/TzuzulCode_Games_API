const { response } = require("express")
const express = require("express")
const path = require("path")
const GameConstroller = require("../controllers/gamesController")
const GamesController = require("../controllers/gamesController")

//Function for path to views
function views(document){
    return path.join(__dirname,"../","views",document)
}

const router = express.Router()

//Games Controller instance
const gamesController = new GamesController()


//Middlewares
router.get('/games_registry',(req,resp)=>{
    console.log()
    return resp.sendFile(views("games_registry.html"))
})


router.post('/games_registry',async function(req,resp){
   
    
    const data = req.body
    const game = await gamesController.create(data)
    
    if(game.success){
        return resp.redirect("/")
    }else{
        return resp.redirect("/games_registry")
    }
    
})

router.get("/games",(req,res)=>{
    return res.sendFile(views("games.html"))
})


router.get("/api/games/delete/:id",async(req,res)=>{
    const id = req.params.id
    console.log(id)
   await gamesController.delete(id)
   return res.redirect("/games")
   
})

router.get("/api/games/update/:id",async(req,res)=>{
    const id = req.params.id
    console.log(id)
   const dataId = await gamesController.readOne(id)
   console.log(dataId)
    
    return res.send(template(dataId[0]))
   
})

router.post("/api/games/update/:id",async(req,res)=>{
    
    const data = req.body
    console.log(data)
    const id = parseInt(req.params.id)
    console.log(id)
    
     await gamesController.update(data,id)
    return res.redirect("/games")
   
   
})

router.delete("/api/games/:id"), async(req,res)=>{
    
        /*const id = req.params.id
        console.log(id)*/
        var game = await gamesController.delete(id)
        var games = await gamesController.readAll()
    return res.json(games)
}

router.get("/api/games",async (req,res)=>{
    var games = await gamesController.readAll()
    return res.json(games)
})



function template(data){
    console.log(data)
    const template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="/styles/games_registry_style.css" type="text/css">
    </head>
    <body>
        <h1>Games Update</h1>
        <a href="/">Home</a>
        <div class="container">
            <div id="form-container">
                <form method="POST" action="/api/games/update/${data.id}">
                    <label for="name">Title:
                        <input type="text" name="name" id="name" value = "${data.name}">
                    </label>
                    <br>
                    <label for="platform">Platform:
                        <input type="text" name="platform" id="platform" value = "${data.platform}">
                    </label>
                    <br>
                    <br>
                    
                    <div id="genre-checkbox"> 

                    <label for="genre">Genre:</label>
                    <br>
                    <label for="action">Action
                        <input type="radio" name="genre" id="action" value="action">
                    </label>
                    
                    <label for="adventure">Adventure
                        <input type="radio" name="genre" id="adventure" value="adventure">
                    </label>
                   
                    <label for="puzzle">Puzzles
                        <input type="radio" name="genre" id="puzzle" value="puzzle">
                    </label>
                    
                    <label for="role">Role
                        <input type="radio" name="genre" id="role" value="role">
                    </label>
                    <br>
                    <label for="mmo">MMO
                        <input type="radio" name="genre" id="mmo" value="mmo">
                    </label>
                   
                    <label for="simulation">Simulation
                        <input type="radio" name="genre" id="simulation" value="simulation">
                    </label>
                    
                    <label for="strategy">Strategy
                        <input type="radio" name="genre" id="strategy" value="strategy">
                    </label>
                    
                    <label for="sports">Sports
                        <input type="radio" name="genre" id="sports" value="sports">
                    </label>
                    <br>
                    <br>
                </div>
                    
            
                    <label for="published">Published:
                        <input type="date" name="published" id="published">
                    </label>
                    <br>
                    <label for="pegi">PEGI:
                        <input type="text" name="pegi" id="pegi" value = "${data.pegi}">
                    </label>
                    <br>
                    <label for="image_url">Front Page Url:
                        <input type="text" name="image_url" id="image_url" value = "${data.image_url}">
                    </label>
                    <br>
                    
                    <button>Actualizar</button>
                </form>
        
        
            </div>
    
            </div>
            
            
    </body>
    </html>`

    return template
}
module.exports = router