const key = '952303b3db9b001335c22637bf99ebed'

const buttonSearch = document.getElementById('buttonSearch')
buttonSearch.addEventListener('click', buttonClick)

function updateData(data) {
    if (data.name) {
        document.getElementById("city").innerHTML = `Tempo em ${data.name}`
        document.getElementById("temp").innerHTML = Math.floor(data.main.temp) + "°C"
        document.getElementById("forecast").innerHTML = `${data.weather[0].description}`
        document.getElementById("moisture").innerHTML = `Umidade: ${data.main.humidity}%`
        document.getElementById("img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    }else {
        const notification =  document.getElementById("city")
        notification.innerHTML = `Cidade não encontrada!`
        notification.id = 'notification'
        alert('Cidade não encotrada!')
    }

}

async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(answer => answer.json())
    updateData(data)
}

function buttonClick() {
    const city = document.getElementById('inputCity').value
    document.getElementById('inputCity').value = ''
    searchCity(city)
}

