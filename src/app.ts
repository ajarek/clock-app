import { loadQuote } from './loadQuote.js';
import { loadLocation } from "./loadLocation.js"
import { loadTimezone } from "./loadTimezone.js"
import { addActivity } from "./addActivity.js"
import { changeDecor } from "./changeDecor.js"
const buttonMore = document.querySelector('.button-more button') as HTMLButtonElement
const buttonRefresh = document.querySelector('.button-refresh ') as HTMLDivElement
changeDecor()
loadTimezone()
loadLocation() 
buttonMore.addEventListener('click',addActivity)
buttonRefresh?.addEventListener('click',loadQuote)

