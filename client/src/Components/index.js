import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Carousel from './Carousel';
import locations from '../data/locations.json'

const App = ({  children}) => (
	<Router>
		<div style={{height: 'auto', overflow: 'auto'}}>
			<div className="fixed-top">
			<Carousel locations />
			</div>
			{ children }
			<div className="fixed-bottom">
			</div>
		</div>
	</Router>
);

export default App;


/*
import React, { Component } from 'react';
import { Header } from './Header';
import { Index } from './Components/Index';
import { locations } from './airbnb';

export default class App extends Component {
	
	 Handle location creating and removing
	 @param props
	 
	constructor(props) {
		super( props );
		this.addElement = this.addElement.bind( this );
		this.removeElement = this.removeElement.bind( this );
		
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
		 
		
		this.state = {
			locations: locations,
		};
		console.log( 'App' );
	}
	
	render() {
		console.log( 'App rendering' );
		return (
			<>
				<Header addElement={this.addElement}/>
				<div className="carousel">
					{this.state.locations.map( e => {
						if (e.id < 100) {
							return <Index location={e} key={e.id} index={e.id} removeElement={this.removeElement}></Index>;
						}
					} )}
				</div>
			</>
		);
	}
}
*/
