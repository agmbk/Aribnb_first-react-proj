import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';
import Carousel from './Carousel';
import Loader from './Loader';


function App() {
	const [locations, setLocations] = useState();
	console.log( 'App rendering' );
	useEffect( () => {
		fetch( '/api/locations', {method: 'GET'} )
			.then( (res) => {
				console.log( 'fetch locations', res.status );
				return res.json();
			} )
			.then( (data) => {setLocations( data.locations );} );
	}, [] );
	
	/*
	 Code to get items from Airbnb json
	 let temp = locations.map( (e, i) => ({
	 id: i,
	 rating: e.listing.avgRatingLocalized,
	 contextualPictures: e.listing.contextualPictures.map(img => img.picture),
	 title: e.listing.title,
	 checkin: e.listingParamOverrides.checkin,
	 checkout: e.listingParamOverrides.checkout,
	 price: e.pricingQuote.structuredStayDisplayPrice.primaryLine.price,
	 qualifier: e.pricingQuote.structuredStayDisplayPrice.primaryLine.qualifier,
	 }) );
	 }
	 */
	
	return (
		<Router>
			<Layout addElement={this} setLocations={setLocations} children={
				<>
					{locations ?
						<div className="carousel">
							{locations.map( e => <Carousel location={e} key={e.id}
							                               setLocations={setLocations}></Carousel> )}
						</div>
						: <Loader animation="animation"/>}
				</>
			}/>
		</Router>
	);
}

export default App;
