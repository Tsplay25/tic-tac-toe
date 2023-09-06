document.getElementById("set-player1").addEventListener('click', function(ev){
    ev.preventDefault();

    const div = document.getElementById("p1-block");
    const name = document.getElementById("nick1").value;
    div.innerHTML = ""
    
    const gamertag = document.createElement("h2");
    gamertag.id = "tag-player1"
    gamertag.innerText = name;

    div.appendChild(gamertag);
})

document.getElementById("set-player2").addEventListener('click', function(ev){
    ev.preventDefault();

    const div = document.getElementById("p2-block");
    const name = document.getElementById("nick2").value;
    div.innerHTML = ""
    
    const gamertag = document.createElement("h2");
    gamertag.id = "tag-player2"
    gamertag.innerText = name;

    div.appendChild(gamertag);
})