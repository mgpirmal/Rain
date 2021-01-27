// var search= document.querySelector("#cityInput");
var search = "Orlando";
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
        .then(function() {
            
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
            console.log(response.main.temp);
            console.log(response.wind.speed);
            });

};
function renderWeather(){
      
     temp= response.main.temp

};






start();