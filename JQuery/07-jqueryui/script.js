$(function(){

    $('#madate').datepicker({
        changeYear: true ,
        yearRange: "1900:2050"
    });

    $('#carre').draggable({
        axis : 'x'// limiter le déplacement à l'axe horizontal
    })

});