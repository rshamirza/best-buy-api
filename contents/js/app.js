$( "#products" ).on( "click", function( event ) {
    $("#list").empty()
    products.load()
})

$( "#reviews" ).on( "click", function( event ) {
    $("#list").empty()
    reviews.load()
})


