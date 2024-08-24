const cells = document.querySelectorAll('.cell');
let board = Array(9).fill(' ');
let gameActive = true; 
let difficulty = 'hard'; 

// Difficulty dropdown
document.getElementById('difficultySelect').addEventListener('change', (event) => {
    difficulty = event.target.value;
});

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (board[index] === ' ' && gameActive) {
            makeMove(index, 'X'); 
            checkGameState();     
            if (gameActive) {
                aiMove();           
            }
        }
    });
});

function makeMove(index, player) {
    board[index] = player;
    cells[index].textContent = player;
}

function aiMove() {
    let aiIndex;
    if (difficulty === 'easy') {
        aiIndex = randomMove();
    } else if (difficulty === 'medium') {
        aiIndex = mediumMove();
    } else {
        aiIndex = bestMove();
    }

    if (aiIndex !== null) {
        makeMove(aiIndex, 'O');
        checkGameState();
    }
}

function randomMove() {
    const emptyCells = board.map((cell, index) => cell === ' ' ? index : null).filter(index => index !== null);
    return emptyCells.length ? emptyCells[Math.floor(Math.random() * emptyCells.length)] : null;
}

function mediumMove() {
    if (Math.random() > 0.5) {
        return bestMove();
    } else {
        return randomMove();
    }
}

function bestMove() {
    let bestScore = -Infinity;
    let move = null;

    for (let i = 0; i < 9; i++) {
        if (board[i] === ' ') {
            board[i] = 'O';  
            let score = minimax(board, 0, false);
            board[i] = ' ';  
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }

    return move;
}

function minimax(board, depth, isMaximizing) {
    const winner = checkWinner(board);
    if (winner === 'O') return 1;
    if (winner === 'X') return -1;
    if (checkTie(board)) return 0;

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === ' ') {
                board[i] = 'O';
                let score = minimax(board, depth + 1, false);
                board[i] = ' ';
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === ' ') {
                board[i] = 'X';
                let score = minimax(board, depth + 1, true);
                board[i] = ' ';
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

function updateBoard() {
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
    });
}

function checkGameState() {
    const winner = checkWinner(board);
    if (winner) {
        gameActive = false;
        setTimeout(() => alert(`${winner} wins!`), 100);
    } else if (checkTie(board)) {
        gameActive = false;
        setTimeout(() => alert(`It's a tie!`), 100);
    }
}

function restartGame() {
    board.fill(' ');
    cells.forEach(cell => {
        cell.textContent = '';
    });
    gameActive = true;
}

function checkWinner(board) {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ];
    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] !== ' ' && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

function checkTie(board) {
    return board.every(cell => cell !== ' ');
}
