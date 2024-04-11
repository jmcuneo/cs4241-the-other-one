window.onload = function() {
    const data = [ 42,43,44,45 ]
    
    d3.select( 'body' )
      .data( data )
      .join( 'div' )
        .text( datapoint => 'num: ' + datapoint )
        .style( 'color', 'white' )
   }