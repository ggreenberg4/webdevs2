
$(function() {
          var ctaSelector = $(".cta-selector").val(); 
          $(".cta-selector").change(function() {
            ctaSelector = $(this).val();     
          });
          
          var apiPassThruUrl = "https://polar-garden-75406.herokuapp.com/apiPassThru.php";
          
          var apiEndpoint = "http://ctabustracker.com/bustime/api/v2/getpredictions";
          /*global $ */
          $( ".cta-button" ).click(function() {
          if(ctaSelector==152){
            $(".r152").css("display", "block");
            $(".r49").css("display", "none");
            $(".rX49").css("display", "none");
          }
             if(ctaSelector==49){
            $(".r152").css("display", "none");
            $(".r49").css("display", "block");
            $(".rX49").css("display", "none");
          }
             if(ctaSelector==49){
            $(".r152").css("display", "none");
            $(".r49").css("display", "none");
            $(".rX49").css("display", "block");
          }
          
          $.ajax({
              url: apiPassThruUrl,
              dataType: "json",
              method: 'GET',
              data: {"apiEndpoint": apiEndpoint,
                      "key" : "dYrZ2c4SXpxRwCDhrqns3PehW",
                      "rt": ctaSelector,
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
               $(".r49").remove(".test");
                $(".r"+ v.rt).append(html);
              })
            });
          });
          
          // INDEXDB TEST
          // var request = indexedDB.open("library");

          // request.onupgradeneeded = function() {
          //   // The database did not previously exist, so create object stores and indexes.
          //   var db = request.result;
          //   var store = db.createObjectStore("books", {keyPath: "isbn"});
          //   var titleIndex = store.createIndex("by_title", "title", {unique: true});
          //   var authorIndex = store.createIndex("by_author", "author");
          
          //   // Populate with initial data.
          //   store.put({title: "Quarry Memories", author: "Fred", isbn: 123456});
          //   store.put({title: "Water Buffaloes", author: "Fred", isbn: 234567});
          //   store.put({title: "Bedrock Nights", author: "Barney", isbn: 345678});
          // };
          
          // request.onsuccess = function() {
          //   db = request.result["books"];
          //   var request1 = store.get("books");
          //     request1.onerror = function(event) {
          //     // Handle errors!
          //     console.log("ERROR");
          // };
          //     request1.onsuccess = function(event) {
          //   // Do something with the request.result!
          //   console.log(request1.result.title);
          // };
          // };
        

});
