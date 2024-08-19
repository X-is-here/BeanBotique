function toggleMenu() {
    const navBars = document.querySelectorAll(".navBar");
    navBars.forEach((navBar) => navBar.classList.toggle("show"));
  }

// Initialize the map and set its view to a given place and zoom level
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer to the map (this is a free tile layer from OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Add a marker to the map at the specified coordinates
var marker = L.marker([51.505, -0.09]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Hello!</b><br />This is us").openPopup();