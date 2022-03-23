var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function loadQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.quotable.io/random');
        const data = yield response.json();
        const quote = data.content;
        const author = data.author;
        const quoteElement = document.querySelector('.quotes');
        const authorElement = document.querySelector('.author');
        quoteElement.innerHTML = quote;
        authorElement.innerHTML = author;
    });
}
