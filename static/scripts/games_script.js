//fetch("http://localhost:4000/api/users") //Esto es valido
fetch("/api/games")
.then(function(respuesta){
    //console.log(respuesta)
    return respuesta.json()
})
.then(function(data){
    //console.log(data) // Data es arreglo
    var listGames = document.getElementById("list-games")
    // users.innerHTML = `
    //     <p>Hola</p>
    //     <h3>mensaje...</h3>
    // `
    for(var game of data){
        listGames.innerHTML = listGames.innerHTML + `<div class="user">
                <p class="name">${game.name}</p>
                <p>${game.genre}</p>
                <p>${game.published}</p>
                <p>${game.platform}</p>
                <p>${game.PEGI}</p>
                <img src="${game.image_url}">
            </div>`
    }
})
