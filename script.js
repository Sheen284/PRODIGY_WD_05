const apiKey = "6b1d93cd9a5d98a916380a2abb75720b";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
        const searchbox= document.querySelector(".search input");
        const searchbtn= document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
        async function checkWhether(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else{
            var data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
            document.querySelector(".wind").innerHTML = data.wind.speed+" Km/h";
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/cloud-weather-3198110-2680216.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/7133/7133364.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "https://static.vecteezy.com/system/resources/previews/010/989/526/non_2x/rainy-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4837/4837659.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/175/175872.png";
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

        }               
    }

    searchbtn.addEventListener("click",()=>{
        checkWhether(searchbox.value);
    })