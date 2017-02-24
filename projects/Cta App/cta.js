$(function() {

          var apiPassThruUrl = "https://polar-garden-75406.herokuapp.com/apiPassThru.php";
          
          var apiEndpoint = "http://ctabustracker.com/bustime/api/v2/getroutes";
          
          
          $.ajax({
              url: apiPassThruUrl,
              dataType: "json",
              method: 'GET',
              data: {"apiEndpoint": apiEndpoint,
                      "key" : "dYrZ2c4SXpxRwCDhrqns3PehW",
                      "format":"json"}
            }).done (function (data) {
              console.log(data);
              $("body").append("<h1>Bus Routes</h1>");
             
              $.each(data["bustime-response"]["routes"], function(i,v) {
                  $("body").append("Route #" + v.rt + ", " + v.rtnm + "<br>");
                
              })

            });
        });