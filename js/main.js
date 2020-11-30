// COMEÇO DA API DE MAPA DA PÁGINA DE CONTATO


mapboxgl.accessToken = 'pk.eyJ1IjoibGVsZWNvYnIiLCJhIjoiY2tpMHlqaDVnMTdzZTJ4bm15b20yejlvMyJ9.R_ZdY6EmF5gWVpfMuaYOBw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-46.67533,-23.60242], // starting position [lng, lat]
zoom: 16 // starting zoom
});


var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-46.67533,-23.60242]
      },
      properties: {
        title: 'Mapbox',
        description: 'Digital House,SP.'
      }
    }]
  };
  
  

  // add markers to map
  geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
  });

  
 function enviarMensagem(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mensagem enviada com sucesso!',
        showConfirmButton: false,
        timer: 1500
    });
 } 

 // FIM DA API DE MAPA DA PÁGINA DE CONTATO