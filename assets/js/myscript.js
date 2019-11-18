//Funzione che genera le 6x6 caselle
function generateCells() {
  for (var i = 0; i < 36; i++) {
    $(".wrap").append('<div class="box"></div>');
  }
}

// function ask ajax
function getRandomNum() {
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function(dati) {
      console.log(dati);
      elemento.html(dati.response);
    },
    error: function() {}
  });
}
//
//

var elemento = $("#numrandom");
$(document).ready(function() {
  getRandomNum();
  // click action on a box
  $(this).on("click", ".box", function() {
    // check if this is already clicked or not

    if ($(this).hasClass("clicked")) {
      console.log("already clicked");
    } else {
      $(this).addClass("clicked");
      getRandomNum();
      //    READ THE VALUE OF X FROM THE HTML AND CHECK WETHER TO MAKE IT YELLOW OR GREEN

      x = elemento.html();
      if (x <= 5) {
        $(this).addClass("green");
      } else {
        $(this).addClass("yellow");
      }
    }
  });
  generateCells();
});
