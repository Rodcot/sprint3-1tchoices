var search = document.getElementById( 'search_bar' ), accordions = document.querySelectorAll( '.card-header' );

// Show content on click
Array.prototype.forEach.call( accordions, function( accordion ) {
    accordion.querySelector( 'button' ).addEventListener( 'click', function() {
        this.nextElementSibling.classList.add( 'active' );
    } );
} );

// Apply search
search.addEventListener( 'input', function() {
    var searchText = search.value.toLowerCase();
    Array.prototype.forEach.call( accordions, function( accordion ) {
        if ( accordion.innerText.toLowerCase().indexOf( searchText ) >= 0 ) {
            accordion.style.display = 'block';
        }
        else {
            accordion.style.display = 'none';
        }
    } );
} );