
const apiurl =`http://api.weatherapi.com/v1/current.json?key=82c4bffb0a8f4e1387b85901242206&q=`

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector("weather-icon");

async function checkWeather(city){
    try {
        const response = await fetch(apiurl + `${city}&aqi=no`);
        
        if (!response.ok) {
            throw new Error('City not found or other error');
        }

        const data = await response.json();

        console.log(data);
        console.log("city", data.location.name);
        console.log("temp", data.current.temp_c);
        console.log("Humidity", data.current.humidity);
        console.log("Wind", data.current.wind_kph);
        console.log(data.current.condition.text);

        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
        document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    } catch (error) {
        console.error('Error fetching data:', error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})
 
    
