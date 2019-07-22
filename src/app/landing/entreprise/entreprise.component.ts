import { Component, OnInit } from '@angular/core';
declare const $ : any

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // script for animations
        var utm_query = ""
        $(document).ready(function () {
          $(window).scroll(function () {
            $(".animated").each(function (i) {
              var bottom_of_object =
                $(this)
                  .parent()
                  .offset().top + $(this).outerHeight()
              var bottom_of_window = $(window).scrollTop() + $(window).height()
              if (bottom_of_window > bottom_of_object) {
                $(this).addClass("start")
              }
            })
            if ($(window).scrollTop() >= 80) {
              $("#main-header").addClass("off")
            } else {
              $("#main-header").removeClass("off")
            }
          })
    
          function showDefaultTab() {
            let tabSelector
            $(tabSelector)
              .first()
              .trigger("click")
          }
        })
          ; (function (w : any, d) {
            var b = d.getElementsByTagName("body")[0]
            var s = d.createElement("script")
            var v = !("IntersectionObserver" in w) ? "8.17.0" : "10.20.0"
            s.async = true
            s.src =
              "https://cdn.jsdelivr.net/npm/vanilla-lazyload@" +
              v +
              "/dist/lazyload.min.js"
            w.lazyLoadOptions = {
              /* Your options here */
            }
            b.appendChild(s)
          })(window, document)
          ; (function () {
            var styles = [
              "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css",
              "https://use.fontawesome.com/releases/v5.3.1/css/solid.css",
              "https://use.fontawesome.com/releases/v5.3.1/css/brands.css",
              "https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css"
            ]
            for ( var i = 0; i < styles.length; i++) {
              var css = document.createElement("link")
              css.href = styles[i]
              css.rel = "stylesheet"
              css.type = "text/css"
              document.getElementsByTagName("head")[0].appendChild(css)
            }
          })();
         
    
    }

}
