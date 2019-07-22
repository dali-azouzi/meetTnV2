import { Component, OnInit } from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-entrepriseLogin',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {


//image upload
$(document).ready(function($) {

  // Upload btn on change call function
  $(".uploadlogo").change(function() {
    var filename = readURL(this);
    $(this).parent().children('span').html(filename);
  });


  // Upload btn end

// submit button animation


});





  }

}





  // Read File and return value  
  function readURL(input) {
    var url = input.value;
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0] && (
      ext == "png" || ext == "jpeg" || ext == "jpg" || ext == "gif" || ext == "pdf"
      )) {
      var path = $(input).val();
      
      var filename = path.replace(/^.*\\/, "");
      var reader = new FileReader();

      reader.onload = function (e : any) {
        
        var img =e.target.result
          
      }

      reader.readAsDataURL(input.files[0]);
      // $('.fileUpload span').html('Uploaded Proof : ' + filename);
      return "Uploaded file : "+filename;
    } else {
      $(input).val("");
      return "Only image/pdf formats are allowed!";
    }
  }






  $(document).ready(function() {
	
    $(".button a span").click(function() {
      var btn = $(this).parent().parent();
      var loadSVG = btn.children("a").children(".load");
      var loadBar = btn.children("div").children("span");
      var checkSVG = btn.children("a").children(".check");
      
      btn.children("a").children("span").fadeOut(200, function() {
        btn.children("a").animate({
          width: 56	
        }, 100, function() {
          loadSVG.fadeIn(300);
          btn.animate({
            width: 320	
          }, 200, function() {
            btn.children("div").fadeIn(200, function() {
              loadBar.animate({
                width: "100%"	
              }, 2000, function() {
                loadSVG.fadeOut(200, function() {
                  checkSVG.fadeIn(200, function() {
                    setTimeout(function() {
                      btn.children("div").fadeOut(200, function() {
                        loadBar.width(0);
                        checkSVG.fadeOut(200, function() {
                          btn.children("a").animate({
                            width: 150	
                          });
                          btn.animate({
                            width: 150
                          }, 300, function() {
                            btn.children("a").children("span").fadeIn(200);
                          });
                        });
                      });
                    }, 2000);	
                  });
                });
              });
            });
          });
        });
      });
      
    });
    
  });






