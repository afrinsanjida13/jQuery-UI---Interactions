// JavaScript


// jQuery

// Draggable start===================

$(document).ready(function(){

$( function() {
    $( "#draggable" ).draggable();
  });

});

// Droppable start===================

$(document).ready(function(){
  $( function() {
    $( "#draggable2" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "10% Discount!" );
      }
    });
  });
});

// Resizable start===================

$(document).ready(function(){
  $( function() {
    $( "#resizable" ).resizable();
  });
});

// Selectable start===================

$(document).ready(function(){
  $( function() {
    $( "#selectable" ).selectable();
  } );
});

// Sortable start===================

$(document).ready(function(){
  $( function() {
    $( "#sortable" ).sortable();
  } );
})