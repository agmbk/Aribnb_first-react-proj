const express = require( 'express' );

const PORT = process.env.PORT || 3001;

const app = express();

const locations = require( './data/locations.json' );

app.get( '/api/locations', (req, res) => {
	res.json( {
		locations,
	} );
} );

app.listen( PORT, () => {
	console.log( `Server listening on ${PORT}` );
} );