$(function() {

          var apiPassThruUrl = "https://polar-garden-75406.herokuapp.com/apiPassThru.php";
          
          var apiEndpoint = "http://ctabustracker.com/bustime/api/v2/getpredictions";
          /*global $ */
          $( ".cta-button" ).click(function() {
          $.ajax({
              url: apiPassThruUrl,
              dataType: "json",
              method: 'GET',
              data: {"apiEndpoint": apiEndpoint,
                      "key" : "dYrZ2c4SXpxRwCDhrqns3PehW",
                      "rt": "152,49,X49",
                      "stpid": "12527,12569,8147,8195",
                      "format":"json",
              }
            }).done (function (data) {
              console.log(data);
              //$("body").append("<h1>Bus Routes</h1>");
            
             
              $.each(data["bustime-response"]["prd"], function(i,v) {
                
                    var html = "<tr>"
               + "<td>" + v.rt + "   " + "</td>"
               + "<td>" + v.rtdir + "   " +  "</td>"
                + "<td>" + v.stpid + "   " + "</td>"
               + "<td>" + v.prdctdn + "  " + "minutes</td>"
               + "<td>" + v.des + "  "
               + "</tr>";
                $(".r"+ v.rt).append(html);
              })
            });
            });
        });