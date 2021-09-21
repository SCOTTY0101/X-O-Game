// ES6 arrow function
let player = 'O';
let won = false;


// Checks for winning combination.

const place = (box) => {
    if (box.innerText !="" || won) return;
    box.innerText = player;
    player === 'O' ? player = 'X' : player = 'O';
    gameBoard();
};

// Keeps track of who has played a turn in the game.

const gameBoard = () => {
    for (let i = 0; i <= 2; i++) {
        checkWinner(document.getElementById("0_" + i).innerText,
                    document.getElementById("1_" + i).innerText,
                    document.getElementById("2_" + i).innerText);
        
        checkWinner(document.getElementById(i + "_0").innerText,
                    document.getElementById(i + "_1").innerText,
                    document.getElementById(i + "_2").innerText);
    };
        checkWinner(document.getElementById("0_0").innerText,
                    document.getElementById("1_1").innerText,
                    document.getElementById("2_2").innerText);
    
        checkWinner(document.getElementById("0_2").innerText,
                    document.getElementById("1_1").innerText,
                    document.getElementById("2_0").innerText);
 };


//Loops through the html Div boxes for three matching types.

const checkWinner = (firstBox, secondBox, thirdBox) => {
    if (firstBox != '' && firstBox == secondBox && firstBox == thirdBox) {
        alert('WINNER! Press ctrl + R to play again');
        won = true;
    }
};


