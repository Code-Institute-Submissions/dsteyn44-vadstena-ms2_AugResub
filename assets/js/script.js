let weather = {
 apiKey: '7a296c83e7ed5cd88be5a22cb3c134b8', //API KEY FROM OPEN WEATHER. I OPENED AN ACCOUNT 
 fetchWeather: function (city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;
        document.querySelector(".city").innerText = "Today in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = + Math.floor(temp) + "°C";
        document.querySelector(".weather").classList.remove("loading");
    },
};
weather.fetchWeather("Vadstena");

