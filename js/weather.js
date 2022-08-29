const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "89b8e71bec765b34d4338acd4740d049";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name)
      console.log(`${data.weather[0].main} / ${data.main.temp}`)
      city.innerText =data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; //weather에서 첫번째 중괄호여서 [0]을 사용함
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

