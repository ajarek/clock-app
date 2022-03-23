var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function loadLocation() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://freegeoip.app/json/');
        const data = yield response.json();
        const city = data.city;
        const country = data.country_name;
        const locationCity = document.querySelector('#city');
        const locationCountry = document.querySelector('#country');
        locationCity.innerHTML = city;
        locationCountry.innerHTML = country;
    });
}
