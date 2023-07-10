var searchbtn=$('#searchbtn');
var searchItems = localStorage.searchItems ? JSON.parse(localStorage.searchItems) : [];
var weatherData = []; // Array to store weather data
var x;
 

$(function() {
  $("#searchbtn").on("click", searchCity);
});

//search button funtionality . here i am taking the value from the text input and checking if its already in the array. if yes do not duplicate else add it to the array searchItems.
function searchCity(){

  var city= $.trim($("#city").val());
  var findCity = searchItems.findIndex(cityName =>cityName.toLowerCase()===city.toLowerCase());

  if (findCity===-1 && city.length > 0){
      searchItems.unshift(city); // Add the search term to the array
  }

  localStorage.setItem('searchItems', JSON.stringify(searchItems));

  renderSearchHistory();

  getWeather(city);
 
}
