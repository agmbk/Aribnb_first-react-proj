const express = require( 'express' );
const locations = require( './data/locations.json' );
const fs = require( 'fs' );
const path = require( 'path' );
const cors = require( 'cors' );
const userLocationsPath = './data/userLocations.json';

try {
	const filePath = path.join( __dirname, userLocationsPath );
	if (!fs.existsSync( filePath )) {
		fs.writeFileSync( filePath, '[]' );
	}
} catch (e) {
	console.error( e );
}
const userLocations = require( userLocationsPath );

const PORT = process.env.PORT || 3001;
const app = express();

app.use( cors( {origin: 'http://localhost:3000'} ) );

// create application/json parser
const jsonParser = express.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = express.urlencoded( {extended: false} );

app.get( '/api/locations', cors( {origin: 'http://localhost:3000'} ), (req, res) => {
	res.json( {
		locations: userLocations.length ? locations.concat( userLocations ) : locations,
	} );
} );

app.post( '/api/locations/add', cors( {origin: 'http://localhost:3000'} ), (req, res, next) => {
	console.log( req, res, next );
	res.status( 201 );
} );

app.post( '/api/locations/remove', cors( {origin: 'http://localhost:3000'} ), jsonParser, (req, res, next) => {
	console.log( req.body, req.ip, req.accepted, req.query, req.baseUrl, req.cookies, req.fresh, req.params, req.path, req.url, req.read() );
	
	
	res.sendStatus( 201 );
} );

app.listen( PORT, () => {
	console.log( `Server listening on ${PORT}` );
} );
