var API = {
  issue: function( item, user, override, cb ) {
  	var query = '';
  	last_item = {
  		item: item,
  		user: user
  	};
  	if ( override ) query += '?override=true';
  	jQuery.post( '/api/issue/' + item + '/' + user + query, function( data, status ) {
  		cb( data );
  	} );
  },

  returnItem: function( item, cb ) {
  	jQuery.post( '/api/return/' + item, function( data, status ) {
  		cb( data );
  	} );
  },

  broken: function( item, cb ) {
  	jQuery.post( '/api/broken/' + item, function( data, status ) {
  		cb( data );
  	} );
  },

  lost: function( item, cb ) {
  	jQuery.post( '/api/lost/' + item, function( data, status ) {
  		cb( data );
  	} );
  },

  label: function( item, cb ) {
  	jQuery.post( '/api/label/' + item, function( data, status ) {
  		cb( data );
  	} );
  },

  audit: function( item, location, override, cb ) {
  	jQuery.post( '/api/audit/' + item, { location: location, override: override }, function( data, status ) {
  		cb( data );
  	} );
  },

  newUser: function( name, barcode, email, course, year, cb ) {
  	jQuery.post( '/api/new-user/', {
  		name: name,
  		barcode: barcode,
  		email: email,
  		course: course,
  		year: year
  	}, function( data, status ) {
  		cb( data );
  	} );
  },

  search: function( barcode, cb ) { barcode ? API.get( 'search', barcode, cb ) : null; },

  getItem: function( barcode, cb ) { API.get( 'item', barcode, cb ); },

  getUser: function( barcode, cb ) { API.get( 'user', barcode, cb ); },

  identify: function( barcode, cb ) { API.get( 'identify', barcode, cb ); },

  get: function( method, barcode, cb ) {
  	jQuery.get( '/api/' + method + '/' + barcode, function( data, status ) {
  		cb( data );
  	} );
  },

  getHistory: function() {
  	jQuery.get( '/api/history', function( data, status ) {
      if ( data.actions )
    		jQuery( '#history .items' ).html( data.actions );
  	} );
  },
}
