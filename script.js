const base_url="https://api.openweathermap.org/data/2.5/weather?q=";
const api_id="72a070432d055f562f007e52afe23798&units=metric";
let inp=document.querySelector(".inp");
let btn=document.querySelector(".search-icon")
let icon=document.querySelector(".weather-icon")

async function getinfo(city){
    let information= await fetch(base_url+city+`&appid=${api_id}`)
    
    if(information.status ==404){
        document.querySelector(".weather").style.display="none"
        document.querySelector(".err").style.display="block"
        
    }else{
        let resp= await information.json()
        document.querySelector(".celsius").innerHTML=Math.round(resp.main.temp) + "°C"
        document.querySelector(".humidity").innerHTML=Math.round(resp.main.humidity)+"%"
        document.querySelector(".wind").innerHTML=Math.round(resp.wind.speed)+"km/h"
        document.querySelector(".city-name").innerHTML=resp.name
    
        if(resp.weather.main="smoke"){
            icon.src="img/mist.png"
        }else if(resp.weather.main="clear"){
            icon.src="img/clear.png"
        }else if(resp.weather.main="clouds"){
            icon.src="img/clouds.png"
        }else if(resp.weather.main="dizzle"){
            icon.src="img/dizzle.png"
        }else if(resp.weather.main="rain"){
            icon.src="img/rain.png"
        }else if(resp.weather.main="snow"){
            icon.src="img/snow.png"
        }
        document.querySelector(".weather").style.display="block"
        document.querySelector(".err").style.display="none"
    }
    
}

btn.addEventListener("click",()=>{
    getinfo(inp.value)
})
