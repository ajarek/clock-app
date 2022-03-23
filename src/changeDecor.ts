import { loadTimezone } from "./loadTimezone.js"
export async function changeDecor(){
    const day =document.querySelector('#day') as HTMLSpanElement
    const dayNight = document.querySelector('#day-night') as HTMLImageElement
    const timeHours =await loadTimezone()
    const activeDiv = document.querySelector('.active-div') as HTMLDivElement
    if(Number(timeHours.split(':')[0])>=6 && Number(timeHours.split(':')[0])<=18){
        document.body.style.background=`url('./assets/desktop/bg-image-daytime.jpg')`
        document.body.style.backgroundSize='cover'
        document.body.style.backgroundPosition='center'
        document.body.style.backgroundRepeat='no-repeat'
        day.innerText='Good morning'
        dayNight.src='./assets/desktop/icon-sun.svg'
        activeDiv.style.background='#ccc'
        activeDiv.style.color='#000'
    }
    else{
        document.body.style.background=`url('./assets/desktop/bg-image-nighttime.jpg')`
        document.body.style.backgroundSize='cover'
        document.body.style.backgroundPosition='center'
        document.body.style.backgroundRepeat='no-repeat'
        day.innerText='Good evening'
        dayNight.src='./assets/desktop/icon-moon.svg'
        activeDiv.style.background='#000'
        activeDiv.style.color='#fff'
    }
}