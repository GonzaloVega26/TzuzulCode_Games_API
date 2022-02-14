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
/*
router.get('/regisro',function(request,response){
    return response.sendFile(views("index.html"))
})

router.post('/registro',async function(request,response){
    //console.log(request.body) // {name: 'Tzuzul Code',email: 'mail@tzuzulcode.com',birthday: '2022-02-07'}
    const persona = request.body
    const user = await userController.create(persona)
    // Nos lleva luego a la página principal
    if(user.success){
        return response.redirect("/")
    }else{
        return response.redirect("/registro")
    }
})

router.get("/users",(req,res)=>{
    return res.sendFile(views("users.html"))
})
router.get("/api/users",async (req,res)=>{
    var users = await userController.readAll()
    return res.json(users)
})
*/
module.exports = router