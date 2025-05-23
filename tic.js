var player1 = "X", player2 = "O";
var player1_tag = document.getElementById('player-1');
var player2_tag = document.getElementById('player-2');
var state = [0, 1, 0, 0, 1, 1, 1, 0, 0];
var winner_div = document.getElementById("winner");
var box1_score = document.getElementsByClassName('box1')[0];
var box2_score = document.getElementsByClassName('box2')[0];
var flag = true;
function showHide() {
    if (player1_tag.value != "" && player2_tag.value != "") {
        player1 = player1_tag.value;
        player2 = player2_tag.value;

        document.getElementById('user-form').style.display = "none";
        document.getElementById('game').style.display = "block";

        document.getElementById("player1").innerText = player1;
        document.getElementById("player2").innerText = player2;

        document.getElementById('player_1').innerHTML = player1 + " TURNS";

    }
    else {
        alert("Please fill the required fields")
    }
}
function showhide() {
    if (player1_tag.value != "" && player2_tag.value != "") {
        player1 = player1_tag.value;
        player2 = player2_tag.value;
    }
    document.getElementById('user-form').style.display = "none";
    document.getElementById('game').style.display = "block";

    document.getElementById("player1").innerText = player1;
    document.getElementById("player2").innerText = player2;

    document.getElementById('player_1').innerHTML = player1 + " TURNS";
}
document.querySelector('.row1').addEventListener('click', function (e) {
    // console.log(e.target.id);
    var targeted_id = e.target.id;
    var targeted_div = document.getElementById(targeted_id);
    if (state[targeted_id] == 1 || state[targeted_id] == 0) {
        if (flag) {
            targeted_div.innerHTML = '<img src="https://www.pngall.com/wp-content/uploads/5/Red-X-Letter-PNG-Free-Download.png" style="width:60%; height:60%;">';
            state[targeted_id] = "X";
            document.getElementById('player_2').innerHTML = player2 + " TURNS";
            document.getElementById('player_1').innerHTML = "";
        }
        else {
            targeted_div.innerHTML = '<img src="https://www.clipartmax.com/png/full/441-4410581_tic-tac-toe-clipart.png" style="width:60%; height:60%;">';
            state[targeted_id] = "O";
            document.getElementById('player_1').innerHTML = player1 + " TURNS";
            document.getElementById('player_2').innerHTML = "";
        }
        flag = !flag;
        checkWinner(!flag);
    }
    console.log(state);
});
function checkWinner(player) {
    if (state[0] == state[1] && state[0] == state[2]) {
         winner_div.querySelector('h1').innerText = `Winner: ${player ? player1 : player2}`;
        winner_div.style.display = "block";
        document.getElementById('player_1').innerHTML = "";
        document.getElementById('player_2').innerHTML = "";
        applyWinningPattern(0, 1, 2);
        setDisabled();
        displayScore(player);
        
    }
    else if (state[3] == state[4] && state[3] == state[5]) {
        winner_div.querySelector('h1').innerText = `Winner: ${player ? player1 : player2}`;
        winner_div.style.display = "block";
        document.getElementById('player_1').innerHTML = "";
        document.getElementById('player_2').innerHTML = "";
        applyWinningPattern(3, 4, 5);
        setDisabled();
        displayScore(player);
    
    }
    else if (state[6] == state[7] && state[6] == state[8]) {
         winner_div.querySelector('h1').innerText = `Winner: ${player ? player1 : player2}`;
        winner_div.style.display = "block";
        document.getElementById('player_1').innerHTML = "";
        document.getElementById('player_2').innerHTML = "";
        applyWinningPattern(6, 7, 8);
        setDisabled();
        displayScore(player);
   
    }
    else if (state[0] == state[3] && state[0] == state[6]) {
         winner_div.querySelector('h1').innerText = `Winner: ${player ? player1 : player2}`;
        winner_div.style.display = "block";
        document.getElementById('player_1').innerHTML = "";
        document.getElementById('player_2').innerHTML = "";
        applyWinningPattern(0, 3, 6);
        setDisabled();
        displayScore(player);
  
    }
    else if (state[1] == state[4] && state[1] == state[7]) {
     winner_div.querySelector('h1').innerText = `Winner: ${player ? player1 : player2}`;
        winner_div.style.display = "block";
        document.getElementById('player_1').innerHTML = "";
        document.getElementById('player_2').innerHTML = "";
        applyWinningPattern(1, 4, 7);
        setDisabled();
        displayScore(player);
 
    }
    else if (state[2] == state[5] && state[2] == state[8]) {
        winner_div.querySelector('h1').innerText = `Winner: ${player ? player1 : player2}`;
        winner_div.style.display = "block";
        document.getElementById('player_1').innerHTML = "";
        document.getElementById('player_2').innerHTML = "";
        applyWinningPattern(2, 5, 8);
        setDisabled();
        displayScore(player);
    
    }
    else if (state[0] == state[4] && state[0] == state[8]) {
         winner_div.querySelector('h1').innerText = `Winner: ${player ? player1 : player2}`;
        winner_div.style.display = "block";
        document.getElementById('player_1').innerHTML = "";
        document.getElementById('player_2').innerHTML = "";
        applyWinningPattern(0, 4, 8);
        setDisabled();
        displayScore(player);

    }
    else if (state[2] == state[4] && state[2] == state[6]) {
        winner_div.querySelector('h1').innerText = `Winner: ${player ? player1 : player2}`;
        winner_div.style.display = "block";
        document.getElementById('player_1').innerHTML = "";
        document.getElementById('player_2').innerHTML = "";
        applyWinningPattern(2, 4, 6);
        setDisabled();
        displayScore(player);
        
    }
    else {
        var x = 9;
        for (var i = 0; i < state.length; i++) {
            if (state[i] != 1 && state[i] != 0) {
                x--;
            }
        }

        if (x == 0) {
            winner_div.querySelector('h1').innerText = "It's a Draw !!";
            winner_div.style.display = "block";
            setDisabled();
            for (var i = 0; i < state.length; i++) {
                document.getElementById(i).style.backgroundColor = "green";
            }
        }
    }
}
function setDisabled() {
    for (var i = 0; i < state.length; i++) {
        if (state[i] == 1 || state[i] == 0) {
            state[i] = null;
        }
    }
}

function applyWinningPattern(a, b, c) {
    document.getElementById(a).style.background = "cyan";
    document.getElementById(b).style.background = "cyan";
    document.getElementById(c).style.background = "cyan";
} 

function displayScore(winner) {
    if (winner) {
        let score1 = box1_score.innerText;
        score1++;
        box1_score.innerText = score1;
        if (score1 === 5) {
            winner_div.querySelector('h1').innerText = `${player1} wins the game!!!!`;
            winner_div.style.display = "block";
            setDisabled();
        }
    } else {
        let score2 = box2_score.innerText;
        score2++;
        box2_score.innerText = score2;
        if (score2 === 5) {
            winner_div.querySelector('h1').innerText = `${player2} wins the game!!!!`;
            winner_div.style.display = "block";
            setDisabled();
        }
    }
}


function reset() {
    for (var i = 0; i < state.length; i++) {
        document.getElementById(i).style.backgroundColor = "black";
        document.getElementById(i).innerText = "";
    }
    state = [0, 1, 0, 0, 1, 1, 1, 0, 0];
    flag = true;
    let score1 = +box1_score.innerText;
    let score2 = +box2_score.innerText;

    if (score1 === 5 || score2 === 5) {
        box1_score.innerText = 0;
        box2_score.innerText = 0;
    }
}
function restart() {
    winner_div.style.display = "none";
    window.location.reload();
}
document.getElementById("close").addEventListener("click", function () {
    document.getElementById("winner").style.display = "none";
})