//Create an array of your 3 favorite movies (string[])
var movies = ["Kungfu Panda", "Pulp fiction", "Harry Potter"];
var user = ["Dipanshu", 25, true];
var Weather;
(function (Weather) {
    Weather[Weather["Rainy"] = 0] = "Rainy";
    Weather[Weather["Summer"] = 1] = "Summer";
    Weather[Weather["Winter"] = 2] = "Winter";
    Weather[Weather["Autumn"] = 3] = "Autumn";
})(Weather || (Weather = {}));
var yourWeather = Weather.Rainy;
console.log(yourWeather);
