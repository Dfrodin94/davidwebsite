
document.getElementById("weather-project__button").
    addEventListener("click", function getWeather()
    {
    let temperature = document.getElementById("weather-temperature");
    let description = document.getElementById("weather-description");
    let weather = document.getElementById("weather-icon");

    disableButton();

    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "4fc19dab219f3db77635f639ee673ae3";

    navigator.geolocation.getCurrentPosition(success,error);

    function success(position)
    {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        let url = `${api}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {

                let temp = data.main.temp;
                let weatherDescription = data.weather[0].main;
                let location = data.name;
                let iconCode = data.weather[0].icon;
                let iconUrl =   `https://openweathermap.org/img/w/${iconCode}.png`;

                temperature.innerText = `${temp} ° C`;
                description.innerText = `${weatherDescription} weather in ${location}`;

                weather.src = iconUrl;
                weather.alt = "weather icon";
            });
    }

    function error(error)
    {
        description.innerText = "Something went wrong, please refresh the site and try again";
        console.log(`Error: (${error.code}): ${error.message}`);
    }

});

function disableButton() {
    let button = document.querySelector(".crystal-ball");
    button.disabled = true;
    button.classList.add("crystal-ball-clicked");
}
