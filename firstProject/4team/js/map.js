 // This example uses the autocomplete feature of the Google Places API.
 // It allows the user to find all hospitals in a given place, within a given
 // country. It then displays markers for all the hospitals returned,
 // with on-click details for each hospital.
 // This example requires the Places library. Include the libraries=places
 // parameter when you first load the API. For example:
 // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
 let map;
 let places;
 let infoWindow;
 let markers = [];
 let autocomplete;
 const countryRestrict = {
     country: "kr"
 };
 const MARKER_PATH =
     "https://developers.google.com/maps/documentation/javascript/images/marker_green";
 const hostnameRegexp = new RegExp("^https?://.+?/");
 const countries = {
     au: {
         center: {
             lat: -25.3,
             lng: 133.8
         },
         zoom: 4,
     },
     br: {
         center: {
             lat: -14.2,
             lng: -51.9
         },
         zoom: 3,
     },
     ca: {
         center: {
             lat: 62,
             lng: -110.0
         },
         zoom: 3,
     },
     fr: {
         center: {
             lat: 46.2,
             lng: 2.2
         },
         zoom: 5,
     },
     de: {
         center: {
             lat: 51.2,
             lng: 10.4
         },
         zoom: 5,
     },
     mx: {
         center: {
             lat: 23.6,
             lng: -102.5
         },
         zoom: 4,
     },
     nz: {
         center: {
             lat: -40.9,
             lng: 174.9
         },
         zoom: 5,
     },
     it: {
         center: {
             lat: 41.9,
             lng: 12.6
         },
         zoom: 5,
     },
     za: {
         center: {
             lat: -30.6,
             lng: 22.9
         },
         zoom: 5,
     },
     es: {
         center: {
             lat: 40.5,
             lng: -3.7
         },
         zoom: 5,
     },
     pt: {
         center: {
             lat: 39.4,
             lng: -8.2
         },
         zoom: 6,
     },
     us: {
         center: {
             lat: 37.1,
             lng: -95.7
         },
         zoom: 3,
     },
     uk: {
         center: {
             lat: 54.8,
             lng: -4.6
         },
         zoom: 5,
     },

     kr: {
         center: {
             lat: 37.5642135,
             lng: 127.0016985
         },
         zoom: 16,
     },

 };

 function initMap() {
     map = new google.maps.Map(document.getElementById("map"), {
         // zoom: countries["kr"].zoom,
         zoom: 11,
         center: countries["kr"].center,
         mapTypeControl: false,
         panControl: false,
         zoomControl: true,
         streetViewControl: false,
         styles: [{
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#f5f5f5"
                 }]
             },
             {
                 "elementType": "labels.icon",
                 "stylers": [{
                     "visibility": "off"
                 }]
             },
             {
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "color": "#616161"
                 }]
             },
             {
                 "elementType": "labels.text.stroke",
                 "stylers": [{
                     "color": "#f5f5f5"
                 }]
             },
             {
                 "featureType": "administrative.land_parcel",
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "color": "#bdbdbd"
                 }]
             },
             {
                 "featureType": "poi",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#eeeeee"
                 }]
             },
             {
                 "featureType": "poi",
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "color": "#757575"
                 }]
             },
             {
                 "featureType": "poi.park",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#e5e5e5"
                 }]
             },
             {
                 "featureType": "poi.park",
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "color": "#9e9e9e"
                 }]
             },
             {
                 "featureType": "road",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#ffffff"
                 }]
             },
             {
                 "featureType": "road.arterial",
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "color": "#757575"
                 }]
             },
             {
                 "featureType": "road.highway",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#dadada"
                 }]
             },
             {
                 "featureType": "road.highway",
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "color": "#616161"
                 }]
             },
             {
                 "featureType": "road.local",
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "color": "#9e9e9e"
                 }]
             },
             {
                 "featureType": "transit.line",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#e5e5e5"
                 }]
             },
             {
                 "featureType": "transit.station",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#eeeeee"
                 }]
             },
             {
                 "featureType": "water",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#c9c9c9"
                 }]
             },
             {
                 "featureType": "water",
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "color": "#9e9e9e"
                 }]
             }
         ],

     });

     google.maps.event.addListenerOnce(map, 'idle', function () {
         search();
     });

     infoWindow = new google.maps.InfoWindow({
         content: document.getElementById("info-content"),
     });
     // Create the autocomplete object and associate it with the UI input control.
     // Restrict the search to the default country, and to place type "cities".
     autocomplete = new google.maps.places.Autocomplete(
         document.getElementById("autocomplete"), {
             types: ["(cities)"],
             componentRestrictions: countryRestrict,
         }
     );
     places = new google.maps.places.PlacesService(map);
     autocomplete.addListener("place_changed", onPlaceChanged);
     // Add a DOM event listener to react when the user selects a country.
     document
         .getElementById("country")
         .addEventListener("change", setAutocompleteCountry);
 }

 // When the user selects a city, get the place details for the city and
 // zoom the map in on the city.
 function onPlaceChanged() {
     const place = autocomplete.getPlace();

     if (place.geometry && place.geometry.location) {
         map.panTo(place.geometry.location);
         map.setZoom(10);
         search();
     } else {
         document.getElementById("autocomplete").placeholder = "Enter a city";
     }
 }


 // Search for 루이스폴센(keyword) in the selected city, within the viewport of the map.
 function search() {
     console.log('search');
     const search = {
         bounds: map.getBounds(),
         types: ["furniture_store"],
         keyword: '루이스 폴센'
     };

// 근처써치
     places.nearbySearch(search, (results, status, pagination) => {
         if (status === google.maps.places.PlacesServiceStatus.OK && results) {
             clearResults();
             clearMarkers();

             // Create a marker for each hospital found, and
             // assign a letter of the alphabetic to each marker icon. (써치 후 마커 만들기)
             for (let i = 0; i < results.length; i++) {
                 const markerLetter = String.fromCharCode(
                     "A".charCodeAt(0) + (i % 26)
                 );
                 const markerIcon = './marker.png'
                 // Use marker animation to drop the icons incrementally on the map.
                 markers[i] = new google.maps.Marker({
                     position: results[i].geometry.location,
                     animation: google.maps.Animation.DROP,
                     icon: markerIcon,
                 });
                 // If the user clicks a hospital marker, show the details of that hospital (클릭하면 인포창 띄워줌)
                 // in an info window.
                 markers[i].placeResult = results[i];
                 google.maps.event.addListener(
                     markers[i],
                     "click",
                     showInfoWindow
                 );
                 setTimeout(dropMarker(i), i * 100);
                 addResult(results[i], i);
             }
         }
     });

 }
 // Adjust the scale.
 //  const pinViewScaled = new google.maps.marker.PinView({
 //      scale: 1.5,
 //  });
 //  const markerViewScaled = new google.maps.marker.AdvancedMarkerView({
 //      map,
 //      position: {
 //          lat: 37.419,
 //          lng: -122.02
 //      },
 //      content: pinViewScaled.element,
 //  });


 function clearMarkers() {
     for (let i = 0; i < markers.length; i++) {
         if (markers[i]) {
             markers[i].setMap(null);
         }
     }
     markers = [];
 }

 // Set the country restriction based on user input.
 // Also center and zoom the map on the given country.
 function setAutocompleteCountry() {
     const country = document.getElementById("country").value;

     if (country == "all") {
         autocomplete.setComponentRestrictions({
             country: []
         });
         map.setCenter({
             lat: 15,
             lng: 0
         });
         map.setZoom(2);
     } else {
         autocomplete.setComponentRestrictions({
             country: country
         });
         map.setCenter(countries[country].center);
         map.setZoom(countries[country].zoom);
     }
     clearResults();
     clearMarkers();
 }

 function dropMarker(i) {
     return function () {
         markers[i].setMap(map);
     };
 }

//  결과를 리스트에 표시하자!

 function addResult(result, i) {
    // 💛전화번호는 어디에?
     console.log(result);
     
     const results = document.getElementById("results");
     const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
     const markerIcon = './maps-and-flags.png';
     const tr = document.createElement("tr");
    //  tr.style.backgroundColor = i % 2 === 0 ? '#f8f6f5' : "#f8f6f5";

     tr.onclick = function () {
         google.maps.event.trigger(markers[i], "click");
     };
     //  const iconTd = document.createElement("td");

     const nameTd = document.createElement("td");
     nameTd.innerHTML = `
        <h3>${result.name}</h3>
        <div class="vicinity">${result.vicinity}</div>
        <div class="no_button">길찾기<i class="fa-solid fa-location-pin"></i></div>
       
     `;
     //  const icon = document.createElement("img");
     //  icon.src = markerIcon;
     //  icon.setAttribute("class", "placeIcon");
     //  icon.setAttribute("className", "placeIcon");
     //const name = document.createTextNode(result.name);


     //  iconTd.appendChild(icon);
     //nameTd.appendChild(name);
     //  tr.appendChild(iconTd);
     tr.appendChild(nameTd);
     results.appendChild(tr);
 }

 function clearResults() {
     const results = document.getElementById("results");

     while (results.childNodes[0]) {
         results.removeChild(results.childNodes[0]);
     }
 }

 // Get the place details for a hospital. Show the information in an info window,
 // anchored on the marker for the hospital that the user selected.
 function showInfoWindow() {
     const marker = this;
     places.getDetails({
             placeId: marker.placeResult.place_id
         },
         (place, status) => {
             if (status !== google.maps.places.PlacesServiceStatus.OK) {
                 return;
             }
             infoWindow.open(map, marker);
             buildIWContent(place);
             console.log(place);
         }
     );
 }

 // Load the place information into the HTML elements used by the info window.
 function buildIWContent(place) {
   

     //아이콘은 삭제함-->  document.getElementById("iw-icon").innerHTML =
     //      '<img class="hospitalIcon" ' + 'src="' + place.icon + '"/>';

     document.getElementById("iw-url").innerHTML =
         '<b><a href="' + place.url + '">' + place.name + "</a></b>";
     document.getElementById("iw-address").textContent = place.vicinity;

     if (place.formatted_phone_number) {
         document.getElementById("iw-phone-row").style.display = "";
         document.getElementById("iw-phone").textContent =
             place.formatted_phone_number;
     } else {
         document.getElementById("iw-phone-row").style.display = "none";
     }


     // Assign a five-star rating to the hospital, using a black star ('&#10029;')
     // to indicate the rating the hospital has earned, and a white star ('&#10025;')
     // for the rating points not achieved.
     //  if (place.rating) {
     //      let ratingHtml = "";

     //      for (let i = 0; i < 5; i++) {
     //          if (place.rating < i + 0.5) {
     //              ratingHtml += "&#10025;";
     //          } else {
     //              ratingHtml += "&#10029;";
     //          }
     //          document.getElementById("iw-rating-row").style.display = "";
     //          document.getElementById("iw-rating").innerHTML = ratingHtml;
     //      }
     //  } else {
     //      document.getElementById("iw-rating-row").style.display = "none";
     //  }

     // The regexp isolates the first part of the URL (domain plus subdomain)
     // to give a short URL for displaying in the info window.
     if (place.website) {
         let fullUrl = place.website;
         let website = String(hostnameRegexp.exec(place.website));

         if (!website) {
             website = "http://" + place.website + "/";
             fullUrl = website;
         }
         document.getElementById("iw-website-row").style.display = "";
         document.getElementById("iw-website").textContent = website;
     } else {
         document.getElementById("iw-website-row").style.display = "none";
     }
 }