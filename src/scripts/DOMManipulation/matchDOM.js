import { Board } from "./preparationDOM";

function generateEnemyArray() {
    const enemyVirtualBoard = new Board();
    enemyVirtualBoard.randomValidBoardArray();
     return enemyVirtualBoard.boardArray
}

function enemyRandomMove(userArray, userShipsHit) {
    let hit = false;
    while (!hit){
        let i = Math.floor(Math.random() * 10);
        let j = Math.floor(Math.random() * 10);
    if(userShipsHit.hit !== 15){
        if(userArray[i][j] !== 2){
            if(userArray[i][j] === 1) {
                userArray[i][j] = 2;
                document.querySelector(`#player-board .column[data-coord="${i}${j}"]`).style.background = 'red';
                hit = true;
                userShipsHit.hit += 1;
                if(userShipsHit.hit === 15) {
                    document.getElementById("display").textContent = "ENEMY WON!";
                    document.getElementById('reset-button').style.display = "block";
                            return undefined;
                }
            } else {
                userArray[i][j] = 2;
                document.querySelector(`#player-board .column[data-coord="${i}${j}"]`).style.backgroundColor = '#1B9AAA';
                hit = true;
            }
        }
    }

}
}

export function applyMatchListeners(userArray){

    const resetButton = document.getElementById('reset-button');
    resetButton.onclick = () => {
        window.location.reload();
    };

    const enemyArray = generateEnemyArray();

    let enemyShipsHit = 0;
    let myShipsHit = {'hit': 0}; //Object cause I need it as reference

     for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
            const tile = document.querySelector(`#enemy-board .column[data-coord="${i}${j}"]`); 
            tile.onclick = () => {
                if(enemyShipsHit !== 15){
                if(enemyArray[i][j] !== 2){
                    if(enemyArray[i][j] === 1){
                        enemyArray[i][j] = 2;
                        tile.style.backgroundColor = 'red';
                        enemyShipsHit += 1;
                        if(enemyShipsHit === 15){
                            document.getElementById("display").textContent = "YOU WON!";
                            resetButton.style.display = "block";
                            return undefined;
                        }
                        enemyRandomMove(userArray, myShipsHit);
                    }
                    else {
                        enemyArray[i][j] = 2;
                        tile.style.backgroundColor = '#1B9AAA';
                        enemyRandomMove(userArray, myShipsHit);
                    }
                }
            }


/*
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
*/




            }
/*
            
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
            }*/
        }
    }
    
}

/*
xxxThen, I generate the enemy virtual board here
xxxThen, I add listeners to each of the enemy board's tiles
    onclick:
    xxxwhen I click on a tile, the program will first check if the tile wasn't clicked yet(nothing happens),
    xxxif it was not: the program will check if there is a ship there,
    xxxif there is: we mark that tile in the dom, mark that tile in the virtual dom and increase the "enemyshiphit" counter
    xxxif the counter is equal the total ship parts, the game ends here and we display to the user that he won, and stops him from clicking on anymore tiles
    then, the enemy make a random move and we basically repeat this logic for the enemy
    it keeps repeating itself until someone wins
    when someone wins, we display a button to try again

    on hover:
    the program will first check if the tile wasn't clicked yet(nothing happens)
    if it was not: if gets background color meaning this tile is valid
*/