/* global jQuery */
( function( $ ) {

  $( function() {
    $( '#encuesta' ).submit( function( event ) {
      var $fields, serializedData;

      event.preventDefault();
      $fields = $( this ).find( 'select, input, textarea' );
      serializedData = [];
      $.each( $fields, function( index, element ) {
          serializedData[ index ] = $( element ).val();
      })
      window.formData = serializedData;
    });
  });

} )( jQuery );
