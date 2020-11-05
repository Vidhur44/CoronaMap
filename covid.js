function data(){
  var api = "https://www.trackcorona.live/api/countries";
  fetch(api)
  .then(response => response.json())
  .then(covid => {
    console.log(covid)
    covid.data.forEach(country=>{
          latitude = country.latitude;
          longitude = country.longitude;
  
          var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
                "<h2>"+country.location+"</h2>"+"<h3>"+"("+country.country_code.toUpperCase()+")"+"</h3>"+
                "<p>"+"Confirmed : "+country.confirmed+"</p>"+
                "<p>"+ "Deaths : "+country.dead+"</p>"+
                "<p>"+"Recovered : "+country.recovered+"</p>"
            );

             
            var el = document.createElement('div');
            el.id = 'marker';
             
            new mapboxgl.Marker(el)
            .setLngLat([longitude,latitude])
            .setPopup(popup) 
            .addTo(map);
  
    })
  })
}
data();