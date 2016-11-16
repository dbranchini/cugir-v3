var searchMap = L.map('map').setView([43.2994, -74.2179], 7);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(searchMap);

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$('#results-panel').hide();


$('#showBrowseResults').on('click', function() {
  $('#welcome-panel').hide();
  $('#results-panel').fadeIn(400);
  closeNav();
});

$('#showSearchResults').on('click', function() {
  $('#welcome-panel').hide();
  $('#results-panel').fadeIn(400);
});

$('#startOver').on('click', function() {
  $('#results-panel').hide();
  $('#welcome-panel').fadeIn(400);
});





