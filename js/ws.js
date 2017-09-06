  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

$(document).ready(function() {
  	$('.progress .progress-bar').css("width",
            function() {
                return $(this).attr("aria-valuenow") + "%";
            }
    )
});
/*
  $(document).ready(
      function () {
          try {

              FuncaoMudaTipoPlano("A");

              var WIDTH = $(window).width();

              if (WIDTH < 650) {

                  $(window).resize(
                      function () {

                          IniciaPlanos();

                      }
                  );
                  IniciaPlanos();

                  $("#ListaPlanos").bind("touchstart", function (event) {
                      startCoordsBAN = endCoordsBAN = event.originalEvent.targetTouches[0];
                  });

                  $("#ListaPlanos").bind("touchmove", function (event) {
                      endCoordsBAN = event.originalEvent.targetTouches[0];

                      var Diferenca = endCoordsBAN.pageX - startCoordsBAN.pageX;
                      FuncaoMovePlanosTemp(Diferenca);

                  });

                  $("#ListaPlanos").bind("touchend", function (event) {

                      if ((endCoordsBAN.pageX + 50) < startCoordsBAN.pageX) {

                          FuncaoPlanoMudaMenos();

                      }
                      else if ((endCoordsBAN.pageX - 50) > startCoordsBAN.pageX) {

                          FuncaoPlanoMudaMais();
                          
                      }
                      else {

                          $("#ListaPlanos").css("left", KeepPos + "px");

                      }

                      KeepPos = 0;

                  });

              }

          } catch (e) { alert(e.message); }

      }
  );
*/
