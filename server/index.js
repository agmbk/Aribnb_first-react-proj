const express = require( 'express' );
const locations = require( './data/locations.json' );
const fs = require( 'fs' );
const path = require( 'path' );
const userLocationsPath = './data/userLocations.json';

try {
	const filePath = path.join( 'server', userLocationsPath );
	if (!fs.existsSync( filePath )) {
		fs.writeFileSync( filePath, '[]' );
	}
} catch (e) {
	console.error( e );
}
const userLocations = require( userLocationsPath );


const PORT = process.env.PORT || 3001;
const app = express();

app.get( '/api/locations', (req, res) => {
	res.json( {
		locations: userLocations.length ? locations.concat( userLocations ) : locations,
	} );
} );

app.post( 'api/locations', (req, res, next) => {
	console.log( req, res, next );
	res.status( 201 );
} );

app.listen( PORT, () => {
	console.log( `Server listening on ${PORT}` );
} );
