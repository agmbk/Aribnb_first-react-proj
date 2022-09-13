import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';
import Loader from './Loader';
import Carousel from './Carousel';
import useLocationList from '../lib/hooks/useLocationList';


function App() {
	const locations = useLocationList();
	useEffect();
	/*
	 constructor(props) {
	 super( props );
	 this.addElement = this.addElement.bind( this );
	 this.removeElement = this.removeElement.bind( this );
	 this.state = {
	 location: locations,
	 };
	 console.log( 'App' );
	 
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
	 
	 removeElement(element) {
	 this.setState( {
	 location: removeElement( this.state.location, element ),
	 } );
	 }
	 
	 addElement(element) {
	 this.setState( {
	 location: addElement( this.state.location, element ),
	 } );
	 }
	 */
	
	return (
		<Router>
			<Layout addElement={this} children={
				<>
					{locations ?
						<div className="carousel">
							{locations.map( e => {
								if (e.id < 100) {
									return <Carousel location={e} key={e.id} index={e.id}
									                 removeElement={this}></Carousel>;
								}
							} )}
						</div>
						: <Loader animation="ripple"/>}
				</>
			}/>
		</Router>
	);
}

export default App;
