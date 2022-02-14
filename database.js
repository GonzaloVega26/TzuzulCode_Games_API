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
async function del(table,data){
    try{
        await query(`DELETE FROM ${table} WHERE id=?`,[data])
        return data
    }catch(error){
        return error
    }
}

// Exportamos un objeto
module.exports = {query,insert,del}