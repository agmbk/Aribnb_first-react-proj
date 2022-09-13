import React, { useMemo, useState } from 'react';


const LocationProvider = () => {
	const [locations, setLocations] = useState(
		fetch( '/api/locations' )
			.then( (res) => {
				console.log( 'fetch locations', res.status );
				return res.json();
			} )
			.then( (data) => {return setLocations( data.locations );} )
	)
	

	return locations
}
export default LocationProvider