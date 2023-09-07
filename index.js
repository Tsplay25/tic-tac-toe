let name1 = name2 = "";

document.getElementById("set-player1").addEventListener("click", function (ev) {
    ev.preventDefault();

    const div = document.getElementById("p1-block");
    name1 = document.getElementById("nick1").value;
    div.innerHTML = "";

    const gamertag = document.createElement("h2");
    gamertag.id = "tag-player1";
    gamertag.innerText = name1;

    div.appendChild(gamertag);
});

document.getElementById("set-player2").addEventListener("click", function (ev) {
    ev.preventDefault();

    const div = document.getElementById("p2-block");
    name2 = document.getElementById("nick2").value;
    div.innerHTML = "";

    const gamertag = document.createElement("h2");
    gamertag.id = "tag-player2";
    gamertag.innerText = name2;

    div.appendChild(gamertag);
});

function startGame() {
    
}

function playerMove(button_ID) {
    const actualPlayer = document.getElementById("turn-player");
    const actualButton = document.getElementById(button_ID);
    const description = document.querySelector(".turn-description");
    let player = actualPlayer.innerText;

    if (player === "1") {
        actualButton.innerText = "X";
        actualPlayer.innerText = "2";
        actualButton.className += " red";
        description.className = "turn-description blue";
    } else {
        actualButton.innerText = "O";
        actualPlayer.innerText = "1";
        actualButton.className += " blue";
        description.className = "turn-description red";
    }
    actualButton.setAttribute("disabled", "true");

    setTimeout(function () {
        winner();
    }, 100);
}

const buttons = document.getElementsByClassName("playKey");

for (let i = 0; i < buttons.length; i++) {
    let id = buttons[i].id;

    buttons[i].addEventListener("click", function (ev) {
        ev.preventDefault();
        if (name1.trim() === "" || name2.trim() === "") {
            alert("Ambos os jogadores devem definir suas gamertags para iniciar o jogo.");
            return;
        }else playerMove(id);

    });
}

function winner() {
    const actualPlayer = document.getElementById("turn-player");
    player = actualPlayer.innerText === "1" ? "2" : "1";
    const gameWinner = document.getElementById("tag-player" + player).innerText;
    let flag = false;
    let cont =0, draw = false;

    const victory = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], 
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], 
        [0, 4, 8],
        [2, 4, 6], 
    ];
    let actualGame = [];

    for (let i = 0; i < buttons.length; i++){
        actualGame.push(buttons[i].innerText);
        if(actualGame[i] !== "") cont++;
    }

    if(cont===9) {
        setTimeout(function () {
            const restart = confirm("Houve um empate!");
            if(restart) resetBoard();
            return;
        }, 100)
    }
    

    for (const comb of victory) {
        const [a, b, c] = comb;
        if ((actualGame[a] === "X" && actualGame[b] === "X" && actualGame[c] === "X") ||
            (actualGame[a] === "O" && actualGame[b] === "O" && actualGame[c] === "O")) {
                buttons[a].className += " winner";
                buttons[b].className += " winner";
                buttons[c].className += " winner";
                flag = true;
                break;
        }
    }
    if (flag) {
        setTimeout(function () {
            const restart = confirm(
                "Jogador(a) " + gameWinner + " ganhou! Deseja reiniciar?"
                );
            if(restart) resetBoard();
        }, 100)
    }
}

function resetBoard() {
    const buttons = document.getElementsByClassName("playKey");
    const actualPlayer = document.getElementById("turn-player");
    const description = document.querySelector(".turn-description");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = "";
        buttons[i].removeAttribute("disabled");
        actualPlayer.innerText = "1";
        buttons[i].className = "playKey";
        description.className = "turn-description red";
    }
}
