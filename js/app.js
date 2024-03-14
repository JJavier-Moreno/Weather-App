const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const apiKey = "a7fb4691b27c9bb0a698e76c72db3c77";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const weather = document.querySelector(".weather-icon");

searchBtn.addEventListener("click", () => {
    checkWheater(searchBox.value);
})

const checkWheater = async (city) => {

    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status === 404){
            document.querySelector(".error").style.display = "block";
        }
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main === "Clear") {
            weather.src = "images/clear.png"
        }
        else if (data.weather[0].main === "Clouds") {
            weather.src = "images/clouds.png"
        }
        else if (data.weather[0].main === "Drizzle") {
            weather.src = "images/drizzle.png"
        }
        else if (data.weather[0].main === "Rain") {
            weather.src = "images/rain.png"
        }
        else if (data.weather[0].main === "Wind") {
            weather.src = "images/wind.png"
        }
        else if (data.weather[0].main === "Snow") {
            weather.src = "images/snow.png"
        }
        else if (data.weather[0].main === "Mist") {
            weather.src = "images/mist.png"
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        

    } catch (err) {
        throw new Error(err);
    }
}
