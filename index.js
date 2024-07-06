const searchbox = document.getElementById('searchbar');
const searchBtn = document.getElementById('bton'); 
const cityname = document.getElementById('city');
const temprature = document.getElementById('temprature');
const feels_like =document.getElementById('FLtext');
const humidity = document.getElementById('Htext');
const pressure = document.getElementById('Ptext');
const visibility =document.getElementById('Vtext');
const windspeed =document.getElementById('WStext');
const description = document.getElementById('description');

async function checkWeather(city){
  const apikey = "f8d16d7c28fb6aa9b75a28207e34a4d9";
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  const weather_data = await fetch(`${apiurl}`).then(response => response.json());

  // console.log(weather_data)

  temprature.innerHTML = `${Math.round(weather_data.main.temp)}°C`;
  feels_like.innerHTML = `Feels Like: ${Math.round(weather_data.main.feels_like)} °C`;
  humidity.innerHTML = `Humidity: ${Math.round(weather_data.main.humidity)} %`;
  pressure.innerHTML = `Pressure: ${Math.round(weather_data.main.pressure)} Pa`;
  visibility.innerHTML = `Visiblity: ${Math.round(weather_data.visibility)} M`;
  windspeed.innerHTML = `Windspeed: ${Math.round(weather_data.wind.speed)} Km/h`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  cityname.innerHTML = `${weather_data.name}`;
}

searchBtn.addEventListener('click', ()=>{
  checkWeather(searchbox.value);
});