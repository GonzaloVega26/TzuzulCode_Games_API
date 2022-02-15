const database = require("../database")//Database 
class GameConstroller{ //GameController Molde
    async create(game){
        const results = await database.insert('games',game)
        
        return results
    }

    async readAll(){
        const games = await database.query("SELECT * FROM games")

        return games
    }
}

module.exports = GameConstroller