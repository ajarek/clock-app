export function addActivity() {
    const arrow= document.querySelector('#arrow') as HTMLImageElement
  const leftBoard = document.querySelector('.left-board') as HTMLDivElement
  const rightBoard = document.querySelector('.right-board') as HTMLDivElement
  const activeDiv = document.querySelector('.active-div') as HTMLDivElement
    arrow.classList.toggle('rotate') 
    leftBoard.classList.toggle('board-active')   
    rightBoard.classList.toggle('board-active')
    activeDiv.classList.toggle('active')
  }