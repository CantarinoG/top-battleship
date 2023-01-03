function isTileValid(boardArray, coordX, coordY, size, isHorizontal){
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

/*
Receberei um array 10 x 10
Receberei coordenadas x e y;
Receberei um tamanho
Receberei uma direção

Checarei o seguinte:

Naquelas coordenadas, se aquele quadrado estiver vazio(0) e os próximos size - 1 quadrados 
horizontais ou verticais exisitirem e estiverem vazios: eu retorno todos eles num vetor de coordenadas

Do contrário: eu retorno falso

*/