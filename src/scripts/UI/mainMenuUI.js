import "../../styles/mainMenu.css"
import writeIcon from "../../assets/write.svg"

import { addFormListener } from "../DOMManipulation/mainMenuDOM";

export function renderMainMenu() {
    const body = document.querySelector('body');
    body.innerHTML = `
    <main id="main-menu">
        <h1>BATTLESHIP</h1>
        <form id="main-menu-form">
            <label for="main-menu-input">Enter your name, admiral:</label>
            <div class="name-input">
                <img src="${writeIcon}" alt="Write Icon" />
                <input type="text" placeholder="John Doe..." id="main-menu-input">
            </div>
            <button type="submit" id="main-menu-submit">START</button>
        </form>
    </main>
    `;

    addFormListener(document.getElementById("main-menu-form"), document.getElementById("main-menu-input"));
}

