// var search= document.querySelector("#cityInput");
var search = "Sydney";
var city1= document.querySelector("#city1");
var city2= document.querySelector("#city2");
var city3= document.querySelector("#city3");
var city4= document.querySelector("#city4");
var city= document.querySelector("#city");
var temp= document.querySelector("#temp");
var humidity= document.querySelector("#humidity");
var windSpeed= document.querySelector("#windSpeed");
var uv= document.querySelector("#uv");



//added imperial to URL for Fahrenheit
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+search+"&units=imperial&appid=d4498fe291ca2967ed4812e5f7191859";
// var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=d4498fe291ca2967ed4812e5f7191859";




function call(){

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After the data comes back from the API
    .then(function(response) {
        console.log(response);
        var iconcode = response.weather[0].icon;
var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
console.log(iconurl);
        document.getElementById("temp").innerHTML = "Temp: "+response.main.temp+ "F";
        document.getElementById("windSpeed").innerHTML = "Wind Speed: "+response.wind.speed+ "MPH";
        document.getElementById("humidity").innerHTML = "Humidity: "+response.main.humidity+ "%";
        document.getElementById("city").innerHTML = response.name;
        $('#wicon').attr('src', iconurl);
        console.log(response.main.temp);
        console.log(response.wind.speed);
        });

};



function start(response){


    $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After the data comes back from the API
        .then(function(response) {
            console.log(response);
            var iconcode = response.weather[0].icon;
var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
console.log(iconurl);
            document.getElementById("temp").innerHTML = "Temp: "+response.main.temp+ "F";
            document.getElementById("windSpeed").innerHTML = "Wind Speed: "+response.wind.speed+ "MPH";
            document.getElementById("humidity").innerHTML = "Humidity: "+response.main.humidity+ "%";
            document.getElementById("city").innerHTML = response.name;
            $('#wicon').attr('src', iconurl);
            console.log(response.main.temp);
            console.log(response.wind.speed);
            });

};
function renderCity(){
      
     // Use JSON.parse() to convert text to JavaScript object
    var citysFinal = JSON.parse(localStorage.getItem("citys"));
    // Check if data is returned, if not exit out of the function
    if (citysFinal !== null) {
    document.getElementById("city1").innerHTML = citysFinal.city1;
   
    return;
};  
}

function saveCity() {
  // Save related form data as an object
  var citys = {
    city1: city1.value.trim(),
    
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("citys", JSON.stringify(citys));
};

$(document).ready(function() {
  $("#cityInput").click(function(){
      call();
  }); 
});





start();