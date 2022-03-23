var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { loadTimezone } from "./loadTimezone.js";
export function changeDecor() {
    return __awaiter(this, void 0, void 0, function* () {
        const day = document.querySelector('#day');
        const dayNight = document.querySelector('#day-night');
        const timeHours = yield loadTimezone();
        const activeDiv = document.querySelector('.active-div');
        if (Number(timeHours.split(':')[0]) >= 6 && Number(timeHours.split(':')[0]) <= 18) {
            document.body.style.background = `url('./assets/desktop/bg-image-daytime.jpg')`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
            day.innerText = 'Good morning';
            dayNight.src = './assets/desktop/icon-sun.svg';
            activeDiv.style.background = '#ccc';
            activeDiv.style.color = '#000';
        }
        else {
            document.body.style.background = `url('./assets/desktop/bg-image-nighttime.jpg')`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
            day.innerText = 'Good evening';
            dayNight.src = './assets/desktop/icon-moon.svg';
            activeDiv.style.background = '#000';
            activeDiv.style.color = '#fff';
        }
    });
}
