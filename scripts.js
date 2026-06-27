async function aperteiNoBotão() {
    let city = document.querySelector(".inputcity").value

    const apikey = "de14f3fc55e57242e20e5ede64d2edb3"
    let urlresponse = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=pt_br`

    let data = await fetch(urlresponse)
    let dataJson = await data.json()
    
    let box = document.querySelector(".box")
    console.log(dataJson)

    box.innerHTML = `
        <h2 class="cidade">${dataJson.name}</h2>
        <h1 class="temperatura">${Math.round(dataJson.main.temp)}°C</h1>
        <img src= "https://openweathermap.org/img/wn/${dataJson.weather[0].icon}@4x.png"</img>
        <p class="descricao">${dataJson.weather[0].description}</p>
        <p class="sensacao">Sensação Térmica:   ${Math.round(dataJson.main.feels_like)}°C</p>
        <p class="maxima">Máxima:   ${Math.round(dataJson.main.temp_max)}°C</p>
        <p class="minima">Mínima:   ${Math.round(dataJson.main.temp_min)}°C</p>
        <p class="vento">Vento:   ${(dataJson.wind.speed)}Km/h</p>
    
    `
}
