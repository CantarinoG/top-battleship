import { renderPreparation } from '../UI/preparationUI';

const validateUserName = require('../logic/mainMenuLogic');

export let userName;

export function addFormListener(form, input){
    form.addEventListener("submit", (e) => { 
        e.preventDefault();
        const name = validateUserName(input.value);
        userName = name;
        console.log(userName);
        renderPreparation();
    });
}

