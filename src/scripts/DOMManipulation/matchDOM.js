import { Board } from './preparationDOM';

function generateEnemyArray() {
  const enemyVirtualBoard = new Board();
  enemyVirtualBoard.randomValidBoardArray();
  return enemyVirtualBoard.boardArray;
}

function enemyRandomMove(userArray, userShipsHit) {
  let hit = false;
  while (!hit) {
    const i = Math.floor(Math.random() * 10);
    const j = Math.floor(Math.random() * 10);
    if (userShipsHit.hit !== 15) {
      if (userArray[i][j] !== 2) {
        if (userArray[i][j] === 1) {
          userArray[i][j] = 2;
          document.querySelector(`#player-board .column[data-coord="${i}${j}"]`).style.background = 'red';
          hit = true;
          userShipsHit.hit += 1;
          if (userShipsHit.hit === 15) {
            document.getElementById('display').textContent = 'ENEMY WON!';
            document.getElementById('reset-button').style.display = 'block';
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
  return undefined;
}

export function applyMatchListeners(userArray) {
  const resetButton = document.getElementById('reset-button');
  resetButton.onclick = () => {
    window.location.reload();
  };

  const enemyArray = generateEnemyArray();

  let enemyShipsHit = 0;
  const myShipsHit = { hit: 0 }; // Object cause I need it as reference

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const tile = document.querySelector(`#enemy-board .column[data-coord="${i}${j}"]`);
      tile.onclick = () => {
        if (enemyShipsHit !== 15) {
          if (enemyArray[i][j] !== 2) {
            if (enemyArray[i][j] === 1) {
              enemyArray[i][j] = 2;
              tile.style.backgroundColor = 'red';
              enemyShipsHit += 1;
              if (enemyShipsHit === 15) {
                document.getElementById('display').textContent = 'YOU WON!';
                resetButton.style.display = 'block';
                return undefined;
              }
              enemyRandomMove(userArray, myShipsHit);
            } else {
              enemyArray[i][j] = 2;
              tile.style.backgroundColor = '#1B9AAA';
              enemyRandomMove(userArray, myShipsHit);
            }
          }
        }
        return undefined;
      };
    }
  }
}
