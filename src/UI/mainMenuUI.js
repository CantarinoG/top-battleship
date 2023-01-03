import "../styles/mainMenu.css"
import writeIcon from "../assets/write.svg"

export function renderMainMenu() {
    const body = document.querySelector('body');
    body.innerHTML = `
        <h1>BATTLESHIP</h1>
        <form>
            <label>Enter your name, admiral:</label>
            <div class="name-input">
                <img src="${writeIcon}" alt="Write Icon" />
                <input type="text" placeholder="John Doe...">
            </div>
        </form>
    `;
}