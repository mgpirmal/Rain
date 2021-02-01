// var search= document.querySelector("#cityInput");
var search = document.getElementById("input").value;
// var search = "Orlando";
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
  var search = document.getElementById("input").value;
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+search+"&units=imperial&appid=d4498fe291ca2967ed4812e5f7191859";
console.log(search);
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After the data comes back from the API
    .then(function(response) {
        console.log(response);

        // pull icon code from api and add it to url to show on page
        var iconcode = response.weather[0].icon;
var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
console.log(iconurl);
        // replace elements eith api response 
        document.getElementById("temp").innerHTML = "Temp: "+response.main.temp+ "F";
        document.getElementById("windSpeed").innerHTML = "Wind Speed: "+response.wind.speed+ "MPH";
        document.getElementById("humidity").innerHTML = "Humidity: "+response.main.humidity+ "%";
        document.getElementById("city").innerHTML = response.name;
        $('#wicon').attr('src', iconurl);
        console.log(response.main.temp);
        console.log(response.wind.speed);
        });

// Below is code for forecast 
// ==================================================================================
var query2URL = "http://api.openweathermap.org/data/2.5/forecast?q="+search+"&units=imperial&appid=d4498fe291ca2967ed4812e5f7191859";
$.ajax({
  url: query2URL,
  method: "GET"
})
  // After the data comes back from the API
  .then(function(response) {
      console.log(response);
      var iconcode1 = response.list[0].weather[0].icon;
var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png";
console.log(iconurl1);
document.getElementById("date1").innerHTML = response.list[0].dt_txt;
      document.getElementById("temp1").innerHTML = "Temp: "+response.list[0].main.temp_max+ "F / "+response.list[0].main.temp_min+ "F";
      $('#wicon1').attr('src', iconurl1);
// Temp every 24 hours (each list is 3 hours)
      var iconcode2 = response.list[8].weather[0].icon;
      var iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png";
      console.log(iconurl2);
      document.getElementById("date2").innerHTML = response.list[8].dt_txt;
            document.getElementById("temp2").innerHTML = "Temp: "+response.list[8].main.temp_max+ "F / "+response.list[8].main.temp_min+ "F";
            $('#wicon2').attr('src', iconurl2);

            var iconcode3 = response.list[16].weather[0].icon;
            var iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png";
            console.log(iconurl3);
            document.getElementById("date3").innerHTML = response.list[16].dt_txt;
                  document.getElementById("temp3").innerHTML = "Temp: "+response.list[16].main.temp_max+ "F / "+response.list[16].main.temp_min+ "F";
                  $('#wicon3').attr('src', iconurl3);

                  var iconcode4 = response.list[24].weather[0].icon;
                  var iconurl4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png";
                  console.log(iconurl4);
                  document.getElementById("date4").innerHTML = response.list[24].dt_txt;
                        document.getElementById("temp4").innerHTML = "Temp: "+response.list[24].main.temp_max+ "F / "+response.list[24].main.temp_min+ "F";
                        $('#wicon4').attr('src', iconurl4);

                        var iconcode5 = response.list[32].weather[0].icon;
                        var iconurl5 = "http://openweathermap.org/img/w/" + iconcode5 + ".png";
                        console.log(iconurl5);
                        document.getElementById("date5").innerHTML = response.list[32].dt_txt;
                              document.getElementById("temp5").innerHTML = "Temp: "+response.list[32].main.temp_max+ "F / "+response.list[32].main.temp_min+ "F";
                              $('#wicon5').attr('src', iconurl5);
      
      });



};



function start(response){
  var search = "orlando"
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+search+"&units=imperial&appid=d4498fe291ca2967ed4812e5f7191859";

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
            // Below is code for forecast 
// ==================================================================================
var query2URL = "http://api.openweathermap.org/data/2.5/forecast?q="+search+"&units=imperial&appid=d4498fe291ca2967ed4812e5f7191859";
$.ajax({
  url: query2URL,
  method: "GET"
})
  // After the data comes back from the API
  .then(function(response) {
      console.log(response);
      var iconcode1 = response.list[0].weather[0].icon;
var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png";
console.log(iconurl1);
      document.getElementById("date1").innerHTML = response.list[0].dt_txt;
      document.getElementById("temp1").innerHTML = "Temp: "+response.list[0].main.temp_max+ "F / "+response.list[0].main.temp_min+ "F";
      $('#wicon1').attr('src', iconurl1);
// Temp every 24 hours (each list is 3 hours)
      var iconcode2 = response.list[8].weather[0].icon;
      var iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png";
      console.log(iconurl2);
      document.getElementById("date2").innerHTML = response.list[8].dt_txt;
            document.getElementById("temp2").innerHTML = "Temp: "+response.list[8].main.temp_max+ "F / "+response.list[8].main.temp_min+ "F";
            $('#wicon2').attr('src', iconurl2);

            var iconcode3 = response.list[16].weather[0].icon;
            var iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png";
            console.log(iconurl3);
            document.getElementById("date3").innerHTML = response.list[16].dt_txt;
                  document.getElementById("temp3").innerHTML = "Temp: "+response.list[16].main.temp_max+ "F / "+response.list[16].main.temp_min+ "F";
                  $('#wicon3').attr('src', iconurl3);

                  var iconcode4 = response.list[24].weather[0].icon;
                  var iconurl4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png";
                  console.log(iconurl4);
                  document.getElementById("date4").innerHTML = response.list[24].dt_txt;
                        document.getElementById("temp4").innerHTML = "Temp: "+response.list[24].main.temp_max+ "F / "+response.list[24].main.temp_min+ "F";
                        $('#wicon4').attr('src', iconurl4);

                        var iconcode5 = response.list[32].weather[0].icon;
                  var iconurl5 = "http://openweathermap.org/img/w/" + iconcode5 + ".png";
                  console.log(iconurl5);
                  document.getElementById("date5").innerHTML = response.list[32].dt_txt;
                        document.getElementById("temp5").innerHTML = "Temp: "+response.list[32].main.temp_max+ "F / "+response.list[32].main.temp_min+ "F";
                        $('#wicon5').attr('src', iconurl5);
      
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
;
$(document).ready(function() {
  
  $("#submit").click(function(){
    
    
    console.log(search)
      call(search);
  }); 
});





start();