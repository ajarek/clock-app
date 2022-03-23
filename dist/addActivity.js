export function addActivity() {
    const arrow = document.querySelector('#arrow');
    const leftBoard = document.querySelector('.left-board');
    const rightBoard = document.querySelector('.right-board');
    const activeDiv = document.querySelector('.active-div');
    arrow.classList.toggle('rotate');
    leftBoard.classList.toggle('board-active');
    rightBoard.classList.toggle('board-active');
    activeDiv.classList.toggle('active');
}
