import '../../styles/preparation.css';

export function renderPreparation() {
    const body = document.querySelector('body');
    body.innerHTML = `
    <div id="preparation">
        <header>
            <h1>PLACE YOUR FLEET...</h1>
        </header>
        <main>
            <div id="board">
            </div>
        </main>
    </div>
    `;

    const board = document.getElementById("board");
    createBoard(board);
}

function createBoard(board) {
    let boardHtml = '';
    for (let i = 0; i < 10; i += 1) {
      boardHtml += "<div class='row'>";
      for (let j = 0; j < 10; j += 1) {
        boardHtml += `<div class='column'></div>`;
      }
      boardHtml += '</div>';
    }
    board.innerHTML = boardHtml;
  }
