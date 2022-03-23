var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function loadTimezone() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://worldtimeapi.org/api/ip');
        const data = yield response.json();
        const timezone = data.timezone;
        const week_number = data.week_number;
        const day_of_week = data.day_of_week;
        const day_of_year = data.day_of_year;
        const datetime = data.datetime.split('T')[1].split('').slice(0, 5).join('');
        const displayDateTime = document.querySelector('.time-hours');
        const displayWeekNumber = document.querySelector('#week-number');
        const displayDayOfWeek = document.querySelector('#day-week');
        const displayDayOfYear = document.querySelector('#day-year');
        const displayTimezone = document.querySelector('#timezone');
        displayDateTime.innerHTML = `${datetime}`;
        displayWeekNumber.innerHTML = `${week_number}`;
        displayDayOfWeek.innerHTML = `${day_of_week}`;
        displayDayOfYear.innerHTML = `${day_of_year}`;
        displayTimezone.innerHTML = `${timezone}`;
        return datetime;
    });
}
