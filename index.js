document.getElementById("set-player1").addEventListener("click", function (ev) {
    ev.preventDefault();

    const div = document.getElementById("p1-block");
    const name = document.getElementById("nick1").value;
    div.innerHTML = "";

    const gamertag = document.createElement("h2");
    gamertag.id = "tag-player1";
    gamertag.innerText = name;

    div.appendChild(gamertag);
});

document.getElementById("set-player2").addEventListener("click", function (ev) {
    ev.preventDefault();

    const div = document.getElementById("p2-block");
    const name = document.getElementById("nick2").value;
    div.innerHTML = "";

    const gamertag = document.createElement("h2");
    gamertag.id = "tag-player2";
    gamertag.innerText = name;

    div.appendChild(gamertag);
});

function playerMove(button_ID) {
    const actualPlayer = document.getElementById("turn-player");
    const actualButton = document.getElementById(button_ID);
    const description = document.querySelector(".turn-description")
    let player = actualPlayer.innerText;

    if (player === "1") {
        actualButton.innerText = "X";
        actualPlayer.innerText = "2";
        actualButton.className += " red"
        description.className = "turn-description blue";
    } else {
        actualButton.innerText = "O";
        actualPlayer.innerText = "1";
        actualButton.className += " blue";
        description.className = "turn-description red";
    }
    actualButton.setAttribute("disabled", "true");

}

const buttons = document.getElementsByClassName("playKey");

for (let i = 0; i < buttons.length; i++) {
    let id = buttons[i].id;

    buttons[i].addEventListener("click", function (ev) {
        ev.preventDefault();
        playerMove(id);
    });
}
