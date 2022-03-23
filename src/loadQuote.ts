
export async function loadQuote() {
    const response =await fetch('https://api.quotable.io/random')
        const data = await response.json()
          const quote = data.content
          const author = data.author
          const quoteElement = document.querySelector('.quotes') as HTMLDivElement
          const authorElement = document.querySelector('.author') as HTMLDivElement
          quoteElement.innerHTML = quote
          authorElement.innerHTML = author  
    }