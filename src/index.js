import './css/styles.css';
import './sass/styles.scss';
import "materialize-loader";
import "materialize-css";
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import $ from 'jquery';

$(document).ready(function() {
  $("#mobileMenu").click(function() {
    event.preventDefault();
    $("#mobileDropDownContainer").toggle();
  })

  $(".scienceBackground").on("mousemove", function(event) {
    var xPos = event.pageX;
    $(".scienceBackground").css({
      "background-position" : xPos + 'px,'+
                              xPos/6 + 'px,'+
                              xPos/12 + 'px,'+
                              xPos/16 + 'px,'
    })
  })
});
