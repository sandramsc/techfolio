/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */    
//source
    //layer
    //map
        // change mouse cursor when over marker
//      map.on('pointermove', function(e) {
       
//      var pixel = map.getEventPixel(e.originalEvent);
//       var hit = map.hasFeatureAtPixel(pixel);
        //console.log(hit)

        //changes curser to pointer when theres a 'true' value i.e earthquake
//        document.getElementById(map.getTarget()).style.cursor = hit ? 'pointer' : '';
//      });


//map 'Vibes' (shifts to area saturated with earthqaukes): North America
var Vibes = [ 26771495.937196344, 3424534.414705636];

  myview = new ol.View({
   //map center: carribean islands
   center:[  33116530.94454149, 3400870.13178283],
   zoom:2
  })
      
  //Specifies the map texture
  var osm = new ol.layer.Tile({
   source: new ol.source.OSM()
  })

  layerArray=[osm]

  var map= new ol.Map({
    target:'map',
    view: myview,
    layers:layerArray
  })

  //Animates the 'Vibe' button
  function VibesClicked(){
    myview.animate({
    //call the button
    center: Vibes,
    duration: 1500,
    zoom:3
    })

  //Specifies and extracts the GeoJSON earthquake data (USGS)
  geojsonSource= new ol.source.Vector({
  url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson',
  format: new ol.format.GeoJSON()
  })
   
  //will read earthquakes
  var VibesLayer = new ol.layer.Vector({
   source:geojsonSource,
  })

  map.addLayer(VibesLayer)

}

