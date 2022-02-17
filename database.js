const mysql = require('mysql2') //Import Mysql library 

//DB Connection info
const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'backend_fundamentals_proyecto_uno'
})

//General query 
async function query(sql,data){
    return new Promise((resolve,reject)=>{

        connection.query(sql,data,(error,result)=>{
           
            if(error){
                reject(error.sqlMessage)
            }else{
                resolve(result)
            }
        })
    })
}

async function findOne(table,id){
    try{
     const game =  await query(`SELECT * FROM ${table} WHERE id = ${id}`)
     return game
    }catch(error){
return error
    }
}

//Insert Query
async function insert(table,data){
    try{
        
        await query(`INSERT INTO ${table}(??) VALUES(?)`,[Object.keys(data),Object.values(data)])
        return {data,success:true}
    }catch(error){
        return {error,success:false}
    }
}

//Delete Query
async function del(table,id){
    try{
        await query(`DELETE FROM ${table} WHERE id=?`,[id])
        return id
    }catch(error){
        return error
    }
}


async function update(table,game,id){
    try{
        console.log("Voy a actualizarme")
        console.log(game)
        console.log(id)
        console.log(`UPDATE ${table} SET name = "${game.name}", genre = "${game.genre}", platform = "${game.platform}", published = "${game.published}", pegi = "${game.pegi}", image_url = "${game.image_url}"  WHERE id=${id}`)
        await query(`UPDATE ${table} SET name = "${game.name}", genre = "${game.genre}", platform = "${game.platform}", published = "${game.published}", pegi = "${game.pegi}", image_url = "${game.image_url}"  WHERE id=${id}`)
        
        console.log("me actualice")
        return game
    }catch(error){
        return error
    }
}

// Exportamos un objeto
module.exports = {query,insert,del,update, findOne}