import config from '../../../config';

console.log( config.apiUrl );

export const removeElement = (list, element) => {
	/**
	 * Removes a location
	 */
	console.log( 'removing element :', element.title );
	const url = `${config.apiUrl}/api/locations/remove`;
	fetch( url, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify( element ),
	} ).then( r => console.log( r ) );
	
	list.splice( list.indexOf( element ), 1 );
	console.log( list );
	return [...list];
};

export const addElement = (list, element) => {
	/**
	 * Add a new location
	 */
	const newElement = {
		id: list.at( -1 ).id + 1,
		rating: 'Nouveau',
		contextualPictures: Array.from( element.file.files ).map( URL.createObjectURL ),
		title: element.title.value,
		checkin: element.checkin.value,
		checkout: element.checkout.value,
		price: element.price.value,
		qualifier: 'nuit',
	};
	
	const url = `${config.apiUrl}/api/locations/add`;
	fetch( url, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify( newElement ),
	} ).then( r => console.log( r ) );
	
	return [
		...list,
		newElement,
	];
};