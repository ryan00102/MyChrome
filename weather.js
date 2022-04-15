//날씨 표시 기능

const API_KEYS = "c4e0733ed08482258c4ac8ebf689b078";


function geoOk(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        const weatherTag = document.querySelector("#weather span:first-child");
        const cityTag = document.querySelector("#weather span:last-child");
        weatherTag.innerText = data.weather[0].main + "/" + Math.floor(data.main.temp);
        cityTag.innerText = data.name;
    });
}
function geoError(){
    alert("We cannot find you!")
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);