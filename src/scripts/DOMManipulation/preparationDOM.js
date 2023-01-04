import { renderMatch } from '../UI/matchUI';

import { userName } from './mainMenuDOM';

const isTileValid = require('../logic/preparationLogic');

export class Board { //A virtual board with a boardArray property that represents which tiles contains part of a ship and which tiles doesn't
    constructor(tiles = 5, isHorizontal = true){
        this.tiles = tiles; //How many tiles the current ship occupies
        this.isHorizontal = isHorizontal; 
        this.boardArray = [];
        this.initializeBoardArray();
    }
    initializeBoardArray(){
        for (let i = 0; i < 10; i += 1) {
            let row = [];
            for (let j = 0; j < 10; j += 1) {
                row.push(0);
            }
            this.boardArray.push(row);
        }
    }
    randomValidBoardArray(){
        while(this.tiles){
            const coordx = Math.floor(Math.random() * 10);
            const coordy = Math.floor(Math.random() * 10);
            const direction = Math.floor(Math.random() * 2);
            const coordinates = isTileValid(this.boardArray, coordx, coordy, this.tiles, direction);
            if(coordinates) { 
                for (let k = 0; k < coordinates.length; k++) {
                    const x = coordinates[k][0]; 
                    const y = coordinates[k][1];
                    this.boardArray[x][y] = 1;
                }
                this.tiles -= 1;
            } 
        }
}}

const board = new Board();

export function addDirectionListener(){
    const directionButton = document.getElementById('direction-button');
    directionButton.onclick = () => {
        if (board.isHorizontal){
            board.isHorizontal = false;
            directionButton.textContent = 'VERTICAL';
        } else {
            board.isHorizontal = true;
            directionButton.textContent = 'HORIZONTAL';
        }
    }
}

export function addBoardListeners(){
    for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
            const tile = document.querySelector(`.column[data-coord="${i}${j}"]`); 
            tile.onclick = () => {
                const coordinates = isTileValid(board.boardArray, i, j, board.tiles, board.isHorizontal);
                if(coordinates) {
                    for (let k = 0; k < coordinates.length; k++) {
                        const x = coordinates[k][0]; 
                        const y = coordinates[k][1];
                        board.boardArray[x][y] = 1;
                        const tileToMark = document.querySelector(`.column[data-coord="${x}${y}"]`); 
                        tileToMark.style.background = '#efefef';
                    }
                    board.tiles -= 1;
                    if(board.tiles === 0){
                        console.log('end')
                        renderMatch(userName, board.boardArray);
                    }
                } 
            }
            tile.onmouseenter = () => {
                const coordinates = isTileValid(board.boardArray, i, j, board.tiles, board.isHorizontal);
                if(coordinates) {
                    for (let k = 0; k < coordinates.length; k++) {
                        const x = coordinates[k][0]; 
                        const y = coordinates[k][1];
                        const tileToMark = document.querySelector(`.column[data-coord="${x}${y}"]`); 
                        tileToMark.style.background = '#1B9AAA';
                    }
                }
            }
            tile.onmouseleave = () => {
                const coordinates = isTileValid(board.boardArray, i, j, board.tiles, board.isHorizontal);
                if(coordinates) {
                    for (let k = 0; k < coordinates.length; k++) {
                        const x = coordinates[k][0]; 
                        const y = coordinates[k][1];
                        const tileToMark = document.querySelector(`.column[data-coord="${x}${y}"]`); 
                        tileToMark.style.background = 'transparent';
                    }
                }
            }
        }
    }
}