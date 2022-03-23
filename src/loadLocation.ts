export async function loadLocation() {
    const response = await fetch('https://freegeoip.app/json/')
    const data = await response.json()
    const city = data.city
    const country = data.country_name
    const locationCity = document.querySelector('#city') as HTMLDivElement
    const locationCountry = document.querySelector('#country') as HTMLDivElement
    locationCity.innerHTML = city
    locationCountry.innerHTML = country
  }