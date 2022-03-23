export async function loadTimezone() {
    const response=await fetch('https://worldtimeapi.org/api/ip')
    const data=await response.json()
    const timezone=data.timezone
    const week_number = data.week_number
    const day_of_week = data.day_of_week
    const day_of_year = data.day_of_year
    const datetime = data.datetime.split('T')[1].split('').slice(0,5).join('')
    const displayDateTime = document.querySelector('.time-hours') as HTMLDivElement
    const displayWeekNumber = document.querySelector('#week-number') as HTMLDivElement
    const displayDayOfWeek = document.querySelector('#day-week') as HTMLDivElement
    const displayDayOfYear = document.querySelector('#day-year') as HTMLDivElement
    const displayTimezone = document.querySelector('#timezone') as HTMLDivElement
    displayDateTime.innerHTML=`${datetime}`
    displayWeekNumber.innerHTML=`${week_number}`
    displayDayOfWeek.innerHTML=`${day_of_week}`
    displayDayOfYear.innerHTML=`${day_of_year}`
    displayTimezone.innerHTML=`${timezone}` 
    return datetime
}