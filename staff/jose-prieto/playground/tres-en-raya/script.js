const board = document.getElementById('board');
const message = document.getElementById('message');
const resetBtn = document.getElementById('resetBtn');
const scoreX = document.getElementById('scoreX');
const scoreO = document.getElementById('scoreO');

let currentPlayer = 'X';
let gameActive = true;
let cells = Array(9).fill('');
let scores = { X: 0, O: 0 };

function checkWinner() {
    const winCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    for (let combo of winCombos) {
        const [a, b, c] = combo;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            gameActive = false;
            message.textContent = `¡Ganó ${cells[a]}! 🎉`;
            scores[cells[a]]++;
            updateScoreboard();
            return;
        }
    }

    if (!cells.includes('')) {
        gameActive = false;
        message.textContent = "¡Empate! 🤝";
    }
}

function handleClick(e) {
    const index = e.target.dataset.index;

    if (!gameActive || cells[index]) return;

    cells[index] = currentPlayer;
    e.target.textContent = currentPlayer;
    checkWinner();

    if (gameActive) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.textContent = `Turno de: ${currentPlayer}`;
    }
}

function initBoard() {
    board.innerHTML = '';
    cells = Array(9).fill('');
    gameActive = true;
    message.textContent = `Turno de: ${currentPlayer}`;

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleClick);
        board.appendChild(cell);
    }
}

function updateScoreboard() {
    scoreX.textContent = scores['X'];
    scoreO.textContent = scores['O'];
}

resetBtn.addEventListener('click', () => {
    currentPlayer = 'X';
    initBoard();
});

initBoard();
