import React from "react";

export const removeElement = (element) => {
	/**
	 * Removes a location
	 */
	const index = this.state.locations.indexOf( element );
	console.log( 'removing element', index, ':', element.title );
	const temp = this.state.locations;
	temp.splice( index, 1 );
	this.setState( {
		location: temp,
	} );
}

export const addElement = (target) => {
	/**
	 * Add a new location
	 */
	this.setState( {
		locations: [
			...this.state.locations,
			{
				id: this.state.locations.at( -1 ).id + 1,
				rating: 'Nouveau',
				contextualPictures: Array.from( target.file.files ).map( URL.createObjectURL ),
				title: target.title.value,
				checkin: target.checkin.value,
				checkout: target.checkout.value,
				price: target.price.value,
				qualifier: 'nuit',
			},
		],
	} );
	console.log( this.state.locations );
	/*
	 const e = {
	 id: this.state.locations.at( -1 ).id + 1,
	 place: target.place.value,
	 date: formatDate().toLowerCase(),
	 price: target.price.value,
	 img: Array.from( target.file.files ).map( URL.createObjectURL ),
	 }
	 this.elementsCount += 1;
	 console.log(this.elementsCount);
	 console.log( 'New element', target.place.value, target.dateA.value, target.price.value );
	 return(
	 <Index location={e} key={e.id} index={this.elementsCount}
	 removeElement={this.removeElement}></Index>
	 )
	 */
}