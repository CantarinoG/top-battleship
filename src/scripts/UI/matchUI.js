import "../../styles/match.css"

import { createBoard } from "./preparationUI";

export function renderMatch() {
    const body = document.querySelector('body');
    body.innerHTML = `
    <div id="match">
        <header>
            <h1>MAKE YOUR MOVE...</h1>
        </header>
        <main>
            <div id="player-container">
                <h2>ADMIRAL</h2>
                <div id="player-board"></div>
            </div>
            <div id="enemy-container">
                <h2>ENEMY</h2>
                <div id="enemy-board"></div>
            </div>
        </main>
    </div>
    `;

    const playerBoard = document.getElementById('player-board');
    const enemyBoard = document.getElementById('enemy-board');
    createBoard(playerBoard);
    createBoard(enemyBoard);

}