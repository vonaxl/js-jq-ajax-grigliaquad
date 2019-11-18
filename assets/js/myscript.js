//Funzione che genera le 6x6 caselle
function generateCells() {
  for (var i = 0; i < 36; i++) {
    $(".wrap").append('<div class="box"></div>');
  }
}
$(document).ready(function() {
  //   FIRST AJAAAX TO LOAD ON PAGE
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function(dati) {
      console.log("TCL: dati", dati);
      elemento.html(dati.response);
    },
    error: function() {}
  });
  var elemento = $("#numrandom");
  $(this).on("click", ".box", function() {
    if ($(this).hasClass("clicked")) {
      console.log("already clicked");
    } else {
      $(this).addClass("clicked");
      //   AJAAAAXX
      $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function(dati) {
          console.log("TCL: dati", dati);
          elemento.html(dati.response);
        },
        error: function() {}
      });
      var x = elemento.html();
      if (x <= 5) {
        $(this).addClass("green");
      } else {
        $(this).addClass("yellow");
      }
    }
  });
  generateCells();
});
