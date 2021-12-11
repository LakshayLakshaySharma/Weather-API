var input = document.querySelector(".input");
var button = document.querySelector(".button");
var name = document.querySelector(".name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var humi = document.querySelector(".humi");
var speed = document.querySelector(".speed");

button.addEventListener("click", function () {
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    input.value +
    "&appid=7ee950a56d447162cc8f072b7729e4d3";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var namevalue = data["name"];
      var tempValue = data["main"]["temp"];
      var descValue = data["weather"][0]["description"];
      var humiValue = data["main"]["humidity"];
      var speedValue = data["wind"]["speed"];

      name.innerHTML = input.value;
      temp.innerHTML =
        "Temperature : " + (tempValue - 273.15).toFixed(2) + " Celsius";
      desc.innerHTML = "Weather: " + descValue;
      humi.innerHTML = "Humidity : " + humiValue + "%";
      speed.innerHTML = "Wind Speed : " + speedValue + " KM/H";
    })

    .catch((err) => alert("Enter Correct City Name!!"));
});
