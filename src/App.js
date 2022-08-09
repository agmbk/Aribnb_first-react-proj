import './App.css';
import React from 'react';

const locations = [
	{
		id: 1,
		place: 'Badachro1, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: [
			'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
		],
	}, {
		id: 2,
		place: 'Badachro2, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: [
			'https://a0.muscache.com/im/pictures/33086851/4a82f1ad_original.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/0dce45cf-ac86-4861-954f-1538e29c528c.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/abf6c8e4-1c21-41b9-aea1-e54920691065.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/c1ead9a3-3dcc-4302-bc9f-4ff36b69c451.jpg?im_w=720',
		],
	}, {
		id: 3,
		place: 'Badachro3, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: [
			'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
		],
	}, {
		id: 4,
		place: 'Badachro4, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: [
			'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
		],
	}, {
		id: 5,
		place: 'Badachro5, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: [
			'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
		],
	}, {
		id: 6,
		place: 'Badachro6, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: [
			'https://a0.muscache.com/im/pictures/33086851/4a82f1ad_original.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/0dce45cf-ac86-4861-954f-1538e29c528c.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/abf6c8e4-1c21-41b9-aea1-e54920691065.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/c1ead9a3-3dcc-4302-bc9f-4ff36b69c451.jpg?im_w=720',
		],
	}, {
		id: 7,
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: [
			'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
		],
	}, {
		id: 8,
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: [
			'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
		],
	}, {
		id: 9,
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: [
			'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
		],
	}, {
		id: 10,
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: [
			'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
		],
	}, {
		id: 11,
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: [
			'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
		],
	}, {
		id: 12,
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: [
			'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
		],
	}, {
		id: 13,
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: [
			'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
			'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
		],
	}, {
		id: 14,
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: [
			'https://a0.muscache.com/im/pictures/33086851/4a82f1ad_original.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/0dce45cf-ac86-4861-954f-1538e29c528c.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/abf6c8e4-1c21-41b9-aea1-e54920691065.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/c1ead9a3-3dcc-4302-bc9f-4ff36b69c451.jpg?im_w=720',
		],
	}, {
		id: 15,
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: [
			'https://a0.muscache.com/im/pictures/acf6a315-410a-43a2-96b5-1470d4d30d68.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/a9f41c56-c07d-4646-bea2-a4faccb29766.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/956d45c8-0c15-4dbe-a313-955b7fd21b9b.jpg?im_w=720',
		],
	},
];



class App extends React.Component {
	/**
	 * Handle location creating and removing
	 * @param props
	 */
	constructor(props) {
		super( props );
		this.appendChild = this.appendChild.bind( this );
		this.errorReset = this.errorReset.bind( this );
		this.removeElement = this.removeElement.bind( this );
		this.state = {
			error: {
				place: null,
				dateA: null,
				dateB: null,
				price: null,
			},
			location: locations,
		};
		console.log(this.state.location);
	}
	
	removeElement(id) {
		console.log( 'removing', this.state.location );
		const temp = this.state.location;
		console.log( this.state.location, temp );
		temp.splice( id, 1 );
		this.setState( {
			location: temp,
		} );
	}
	
	errorReset() {
		this.setState( {
			error: {
				place: null,
				dateA: null,
				dateB: null,
				price: null,
				file: null,
			},
		} );
	}
	
	appendChild(event) {
		event.preventDefault();
		
		/** Empty fields handler */
		
		if (!Object.values( event.target ).every( element => element.value !== '' ) || event.target.dateA.value > event.target.dateB.value) {
			
			const animation_time = 0.3; /* secondes */
			let place = null, dateA = null, dateB = null, price = null;
			
			if (!event.target.place.value) {place = {borderColor: 'red', animation: `shake ${animation_time}s`};}
			if (!event.target.dateA.value) {dateA = {borderColor: 'red', animation: `shake ${animation_time}s`};}
			if (!event.target.dateB.value) {dateB = {borderColor: 'red', animation: `shake ${animation_time}s`};}
			
			if (event.target.dateA.value > event.target.dateB.value) {
				dateA = {
					borderColor: 'red',
					animation: `shake ${animation_time}s`,
				};
				dateB = {borderColor: 'red', animation: `shake ${animation_time}s`};
			}
			
			if (!event.target.price.value || isNaN( event.target.price.value )) {
				price = {
					borderColor: 'red',
					animation: `shake ${animation_time}s`,
				};
			}
			
			this.setState( {error: {place: place, dateA: dateA, dateB: dateB, price: price}} );
			setTimeout( () => {
				this.setState( {
					error: {
						place: place ? {borderColor: 'red'} : null,
						dateA: dateA ? {borderColor: 'red'} : null,
						dateB: dateB ? {borderColor: 'red'} : null,
						price: price ? {borderColor: 'red'} : null,
						file: null,
					},
				} );
			}, animation_time * 1000 );
			return;
		}
		
		/** Append the new location */
		
		this.errorReset();
		this.setState( {
			location: [
				...this.state.location,
				{
					id: this.state.location.at(-1).id + 1,
					place: event.target.place.value,
					date: `${event.target.dateA.value} - ${event.target.dateB.value}`,
					price: event.target.price.value,
					img: Array.from(event.target.file.files).map(URL.createObjectURL)
				},
			],
		} );
		
		console.log( event.target.place.value, event.target.dateA.value, event.target.price.value );
		
	}
	
	render() {
		return (
			<>
				<header>
					
					<div className={'header'}>
						
						<form onSubmit={event => this.appendChild( event )}>
							<fieldset>
								<legend><h2>Add a new location</h2></legend>
								<p>
									<label>Location</label>
									<input style={this.state.error['place']} autoComplete="off"
									       placeholder="Location" id={'place'}/>
								</p>
	
								<p><label>Starting date</label>
									<input style={this.state.error['dateA']} type="date" autoComplete="off" name="dateA" id="dateA"/>
								</p>
								
								<p><label>Ending date</label>
									<input style={this.state.error['dateB']} type="date" autoComplete="off" name="dateB" id="dateB"/>
								</p>
								
								<p><label>Prix</label>
									<input style={this.state.error['price']} autoComplete="off" placeholder="Prix" id={'price'}/>
								</p>
								
								<p>
									<input style={this.state.error['file']} autoComplete="off"
									       placeholder="Images" type="file" multiple accept={'image/*'} id={'file'}/>
								</p>
								<p>
									<input className={'submit'} type="submit" value="Submit"/>
								</p>
								
							</fieldset>
						</form>
					</div>
				
				</header>
				
				<div className="carousel">
					{this.state.location.map( (e, i) => <Carousel location={e} key={e.id} index={i} removeElement={this.removeElement}></Carousel> )}
				</div>
			</>
		);
	}
}

/** *********************************** ENORME ****************************/

class Carousel extends React.Component {
	/**
	 * Render one location with slides, bin and like
	 * @param props
	 */
	constructor(props) {
		super( props );
		this.heartAdd = this.heartAdd.bind( this );
		this.state = {
			images: this.props.location.img,
			heart: null,
			imageAStyle: null,
			imageBStyle: null,
			imageASrc: 0,
			imageBSrc: 0,
		};
	};
	
	heartAdd() {
		/**
		 * Add location to favorites
		 */
		if (this.state.heart) {
			this.setState( {
					heart: null,
				},
			);
			console.log( `Location ${this.props.location.id} removed of bookmarks` );
		} else {
			this.setState( {
					heart: {fill: 'red', transform: 'rotate(360deg) scale(1.2)', transition: '0.3s'},
				},
			);
			console.log( `Location ${this.props.location.id} added to bookmarks` );
		}
	}
	
	render() {
		return (
			<div className="container">
				<div className="image">
					<picture>
						<img style={this.state.imageBStyle} className={'picture second'} src={this.state.images[this.state.imageBSrc]} alt={this.props.location.place}/>
						
						<img style={this.state.imageAStyle} className={'picture first'} src={this.state.images[this.state.imageASrc]} alt={this.props.location.place}/>
						
						<div style={{cursor: 'pointer', pointerEvents: 'none'}}>
						<svg style={this.state.heart} className={'heart'} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false">
							<path onClick={event => this.heartAdd()} d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
						</svg>
						</div>
						
						<div style={{cursor: 'pointer', pointerEvents: 'none'}}>
						<svg className={'bin'} width="1280.000000pt" height="1280.000000pt" viewBox="0 0 1280.000000 1280.000000">
							<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"><path onClick={event => this.props.removeElement( this.props.index )} d="M1067 11733 l-1067 -1068 2132 -2132 2133 -2133 -2133 -2133 -2132-2132 1067 -1068 1068 -1067 2132 2132 2133 2133 2133 -2133 2132 -2132 1068 1067 1067 1068 -2132 2132 -2133 2133 2133 2133 2132 2132 -1067 1068 -1068 1067 -2132 -2132 -2133 -2133 -2133 2133 -2132 2132 -1068 -1067z"/></g>
						</svg>
						</div>
						
						{buttonPrevious( this )}{buttonNext( this )}
						
					</picture>
				</div>
				<div className="star">
					<p>
                        <span><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" role="presentation"
                                   focusable="false">
                        <path
	                        d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path></svg></span>
						5,0
					</p>
				</div>
				<p><strong>{this.props.location.place}</  strong></p>
				<p>{this.props.location.date}</p>
				<p><strong>{this.props.location.price} €</strong> nuit</p>
			
			</div>
		);
	};
}

function buttonNext(parent) {
	/**
	 * The carousel next button
	 * Hidden when the last picture is shown
	 */
	function event() {if (parent.state.imageASrc < parent.state.images.length - 1) {
		
		const animation_time = 0.1; /* secondes */
		
		parent.setState( {
			imageAStyle: {animation: `fadeInNext ${animation_time}s`},
		} );
		
		setTimeout( () => {
			parent.setState( {
				imageAStyle: null,
				imageBStyle: null,
				imageBSrc: parent.state.imageBSrc + 1,
			} );
		}, animation_time * 1000 );
		
		parent.setState( {imageASrc: parent.state.imageASrc + 1} );}}
	
	return (
		<button style={parent.state.imageASrc === parent.state.images.length - 1 ? {opacity: '0', cursor: 'inherit'} : null}
		        type="button" className="carousel-button next" onClick={event}><span
			className="_3hmsj"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
		                            role="presentation" focusable="false"><g fill="none"><path
			d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></span>
		</button>
	);
}

function buttonPrevious(parent) {
	/**
	 * The carousel previous button
	 * Hidden when the first picture is shown
	 */
	function event() {if (parent.state.imageASrc > 0) {
		
		const animation_time = 1; /* secondes */
		
		parent.setState( {
			//imageAStyle: {animation: `fadeInPrevious ${animation_time}s`},
			imageBStyle: {animation: `fadeInPrevious ${animation_time}s`},

		} );
		
		setTimeout( () => {
			parent.setState( {
				imageAStyle: null,
				imageBStyle: null,
				imageBSrc: parent.state.imageBSrc - 1,
			} );
		}, animation_time * 1000 );
		
		parent.setState( {imageASrc: parent.state.imageASrc - 1} );}}
	
	return (
		<button style={!parent.state.imageASrc ? {opacity: '0', cursor: 'inherit'} : null} type="button"
		        className="carousel-button previous" onClick={event}><span
			className="_3hmsj"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
		                            role="presentation" focusable="false"><g fill="none"><path
			d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg></span>
		</button>
	);
}




export default App;
