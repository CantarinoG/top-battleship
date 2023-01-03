class Board { //A virtual board with a boardArray property that represents which tiles contains part of a ship and which tiles doesn't
    constructor(tiles = 5){
        this.tiles = tiles; //How many tiles the current ship occupies
        this.boardArray = [];
        this.initializeBoardArray();
        console.log(this.boardArray);
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
}

const board = new Board();

export function addBoardListeners(){
    for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
            const tile = document.querySelector(`.column[data-coord="${i}${j}"]`); 
            tile.onclick = () => {
                if(functionToSeeIfTileIsAvailable(whateverArgumentItNeeds)) {
                    //mark all occupied tiles in the dom
                    //mark all occupied tiles in the boardArray
                    //Descrease tiles
                    //If tiles equal 0 -> next stage
                } 
            }
        }
    }
}


/*
User will click on a tile
if state equals 5, the program will check if the tile clicked supports five unit(check if there are sufficient tiles and they are not occupied_)
if the square in valid: the square and the following squares will become marked and state is decreased
if the square is not valid: nothing happens
repeat...
*/