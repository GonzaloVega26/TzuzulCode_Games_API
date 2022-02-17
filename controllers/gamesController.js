const database = require("../database")//Database 
class GameConstroller{ //GameController Molde
    async create(game){

        const results = await database.insert('games',game)
        
        return results
    }

    async readAll(){
        const games = await database.query("SELECT * FROM games")
        
        for(let i =0;i<games.length;i++){
          games[i]["published"]=`${games[i]["published"].getDay()}/${games[i]["published"].getMonth()}/${games[i]["published"].getFullYear()}`
            //games[i]["published"]=games[i]["published"].toDateString()
       
        }
        return games
    }
    async delete(id){
        const game = await database.del("games",id)
        return game
    }

    async update(newGame, id){
       console.log(newGame)
        const results = await database.update("games",newGame,id)
        return results
    }

    async readOne(id){
        const game = await database.findOne("games", id)
        game[0]["published"]= `${game[0]["published"].getFullYear()}-${game[0]["published"].getMonth()}-${game[0]["published"].getDay()}`
        //`${game[0]["published"].getFullYear()}-${game[0]["published"].getMonth()}-${game[0]["published"].getDay()}`
        return game
    }
}

module.exports = GameConstroller