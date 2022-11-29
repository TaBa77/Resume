var j, i, x, z, g, h;
g = 0
h = 0
// gamer choose

document.getElementById('rock').onclick = gamer;
document.getElementById('paper').onclick = gamer;
document.getElementById('scissors').onclick = gamer;

function gamer() {
    x = this.id;
    switch (x) {
        case "rock":
            document.getElementById("you").src = "data/rock.png";
            j = 0;
            break;
        case "paper":
            document.getElementById("you").src = "data/paper.png";
            j = 1;
            break;
        case "scissors":
            document.getElementById("you").src = "data/scissors.png";
            j = 2;
            break;
    }
    // pc choose
    i = Math.floor(Math.random() * 3);
    if (i == 0) {
        document.getElementById("pc").src = "data/rock.png";
    }
    else if (i == 1) {
        document.getElementById("pc").src = "data/paper.png";
    }
    else if (i == 2) {
        document.getElementById("pc").src = "data/scissors.png";
    }
    // score
    var a = document.getElementById("yousc");
    var b = document.getElementById("pcsc");
    a.innerHTML = g;
    b.innerHTML = h;

    // rock paper
    if (j == 0 && i == 1) {
        h += 1;
    }
    // rock scissors
    else if (j == 0 && i == 2) {
        g += 1;
    }
    // paper rock
    else if (j == 1 && i == 0) {
        g += 1;
    }
    // paper scissors
    else if (j == 1 && i == 2) {
        h += 1;
    }
    // scissors rock
    else if (j == 2 && i == 0) {
        h += 1;
    }
    // scissors paper
    else if (j == 2 && i == 1) {
        g += 1;
    } else if (i == j) {
        g += 1;
        h += 1;
    }
}

// reset
function reset() {
    location.reload();
}
