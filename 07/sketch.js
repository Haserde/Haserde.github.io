var weatherJSON;
var baseURI = "http://api.openweathermap.org/data/2.5/weather?q=";
var cityQuery = "New York";
var unitQuery = "&units=metric";
var apiKey = "&appid=35a41b1bc3cde5982481e9965aeeb9bb";
var cityHeader;
var cityDesc;
var cityTemp;
var field;

function setup() {
  var theURI = baseURI + cityQuery + unitQuery + apiKey;
  weatherJSON = loadJSON(theURI, getWeather);

  noCanvas();

  field = createElement('input');
  // field.value("");
  var button = createButton("submit");
  
  button.mousePressed(askWeather);

  cityHeader = createElement('h1', "");
  cityDesc = createP("");
  cityTemp = createP("");
}

function askWeather() {
  cityQuery = field.value();

  var theURI = baseURI + cityQuery + unitQuery + apiKey;

  loadJSON(theURI, getWeather);
}

function getWeather(data) {
  weatherJSON = data;
  
  cityHeader.html(weatherJSON.name);
  cityDesc.html(weatherJSON.weather[0].description);
  cityTemp.html(weatherJSON.main.temp + " degrees C");

}