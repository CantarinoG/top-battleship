function isTileValid(boardArray, coordX, coordY, size, isHorizontal){ //Return false if not valid; Return an array wiht used coordinates if true
    const tiles = [];
    if(isHorizontal){
        for (let i = 0; i < size; i += 1) {
            if((coordY + i) < 10){
                if(boardArray[coordX][coordY + i] === 0) {
                    tiles.push([coordX, coordY + i]);
                }
            } 
        }
        if(tiles.length === size){
            return tiles;
        } else {
            return false;
        }
    }
    else {
        for (let i = 0; i < size; i += 1) {
            if((coordX + i) < 10){
                if(boardArray[coordX + i][coordY] === 0) {
                    tiles.push([coordX + i, coordY]);
                }
            } 
        }
        if(tiles.length === size){
            return tiles;
        } else {
            return false;
        }
    }
}

module.exports = isTileValid;
