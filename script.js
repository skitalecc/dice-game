const gameInfo = document.querySelector("[data-game-info]");
const actionBtn = document.querySelector("[data-action-btn]");
const container = document.querySelector("[data-container]");

const genereateRandomNumber = () => Math.ceil(Math.random() * 6);

actionBtn.addEventListener("click", () => {
    render();
});

const render = () => {
    const player1 = genereateRandomNumber();
    const player2 = genereateRandomNumber();

    container.innerHTML = "";

    container.insertAdjacentHTML(
        "afterbegin",
        `
        <svg class="dice dice-red">
            <use href="sprites.svg#dice-${player1}-icon"></use>
        </svg>`
    );
    container.insertAdjacentHTML(
        "afterbegin",
        `
        <svg class="dice dice-blue">
            <use href="sprites.svg#dice-${player2}-icon"></use>
        </svg>`
    );

    if (player1 === player2) {
        gameInfo.textContent = "НИЧЬЯ";
        gameInfo.style.color = "#000";
    } else if (player1 > player2) {
        gameInfo.textContent = "ВЫИГРАЛ КРАСНЫЙ";
        gameInfo.style.color = "#E98B8B";
    } else {
        gameInfo.textContent = "ВЫИГРАЛ СИНИЙ";
        gameInfo.style.color = "#449ffc";
    }
};
render();
