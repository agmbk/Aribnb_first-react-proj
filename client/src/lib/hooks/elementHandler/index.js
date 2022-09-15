export const removeElement = (list, element) => {
	/**
	 * Removes a location
	 */
	console.log( 'removing element :', element.title );
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
	
	fetch( '/api/locations', {
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
	
	/*
	 const e = {
	 id: list.at( -1 ).id + 1,
	 place: element.place.value,
	 date: formatDate().toLowerCase(),
	 price: element.price.value,
	 img: Array.from( element.file.files ).map( URL.createObjectURL ),
	 }
	 this.elementsCount += 1;
	 console.log(this.elementsCount);
	 console.log( 'New element', element.place.value, element.dateA.value, element.price.value );
	 return(
	 <Index location={e} key={e.id} index={this.elementsCount}
	 removeElement={this.removeElement}></Index>
	 )
	 */
};