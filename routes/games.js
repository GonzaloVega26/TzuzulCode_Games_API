const { response } = require("express")
const express = require("express")
const path = require("path")
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
    console.log(req.body)
    
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

router.get("/api/games",async (req,res)=>{
    var games = await gamesController.readAll()
    return res.json(games)
})

module.exports = router