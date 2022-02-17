//fetch("http://localhost:4000/api/users") //Esto es valido
fetch("/api/games")
.then(function(respuesta){
    //console.log(respuesta)
    return respuesta.json()
})
.then(function(data){
    console.log(data)
    
    var gamesTableBody = document.getElementById("table-body")
    for(var game of data){
    gamesTableBody.innerHTML += ` <tr>
    <td>   <img src="${game.image_url}" alt="front image of game" class="front-page">  </td>
    <td>  ${game.name}  </td>
    <td>  ${game.platform}  </td>
    <td>  ${game.published.toString()}  </td>
    <td>  ${game.genre}  </td>
    <td> <a href="/api/games/delete/${game.id}">Delete</a>
         <a href="/api/games/update/${game.id}">Edit</a>

    <!--<button onClick="eliminar(${game.id})">Delete</button>-->
    
    </td>
</tr>`
    }
})

function eliminar(id){
    fetch("/api/games/delete/"+id)
    .then((res)=>{
        console.log("funciono")
    })
}

function update(id){
    fetch("/api/games/update/"+id)
    
}   
