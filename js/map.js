var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 24.841077, lng: 121.003362},
          zoom: 15
        });

        var marker = new google.maps.Marker({
           position : {lat: 24.841077, lng: 121.003362},
           map:map,
           title:'Home'
         });
      }