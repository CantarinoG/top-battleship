import "../../styles/match.css"

import { createBoard } from "./preparationUI";
import { applyMatchListeners } from "../DOMManipulation/matchDOM";

export function renderMatch(userName = "Admiral", playerBoardArray = null) {
    const body = document.querySelector('body');
    body.innerHTML = `
    <div id="match">
        <header>
            <h1 id="display">MAKE YOUR MOVE...</h1>
            <button id="reset-button">RESET</button>
        </header>
        <main>
            <div id="player-container">
                <h2>${userName.toUpperCase()}</h2>
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

    renderBoardContent(playerBoardArray);
    applyMatchListeners(playerBoardArray);

}

function renderBoardContent(playerBoardArray){
    for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
            if(playerBoardArray[i][j] === 1){
                const tileToMark = document.querySelector(`#player-board .column[data-coord="${i}${j}"]`); 
                        tileToMark.style.background = '#efefef';
            }
        }        
    }
}