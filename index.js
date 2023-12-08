const temp = document.getElementById('temp');
const cityName = document.getElementById('cityname');
const Humidity= document.getElementById('Humidity');
const wind= document.getElementById('temp');
const Entercity = document.getElementById('city1');
const searchbtn = document.getElementById('btn');
const weather12 = document.querySelector('.weather-icon');
const weather11 = document.getElementById('weather1');


const apikey="59f87d1fe3a12dd4549ef9e004d70ccc";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function checkweather(Entercity){
    const response = await fetch (apiurl + Entercity + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.getElementById("cityname").innerText = data.name;
    document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
    document.getElementById("Humidity").innerText = data.main.humidity +"%";
    document.getElementById("wind").innerText = data.wind.speed +"km/h";
    

    if(data.weather[0].main == "clouds"){
      weather11.src = "images/clouds.png";
     
    }
    else if(data.weather[0].main=="clear"){
        weather11.src = "images/clear.png";
    }
   else if(data.weather[0].main=="mist"){
        weather12.src = "images/mist.png";
    }
   else if(data.weather[0].main=="rain"){
        weather12.src = "images/rain.png";
    }
    else if(data.weather[0].main == "snow"){
        weather11.src = "images/snow.png";
    }
}
searchbtn.addEventListener("click",()=>{
    checkweather(Entercity.value);
})
