import React, { PureComponent } from 'react';
import InteractionWrapper from './InteractionWrapper';

class Carousel extends PureComponent {
	/**
	 * Render one location with slides, bin and like
	 * @param props
	 */
	constructor(props) {
		super( props );
		this.next = this.next.bind( this );
		this.heartAdd = this.heartAdd.bind( this );
		this.previous = this.previous.bind( this );
		this.formatDate = this.formatDate.bind( this );
		this.state = {
			heart: null,
			imageAStyle: null,
			imageBStyle: null,
			imageASrc: 0,
			imageBSrc: 0,
			timer: null,
		};
		console.log( 'Carousel', this.props.index );
	};
	
	componentDidMount() {
		// this.state.timer = setInterval( this.autoChangeImage.bind(this), 3000)
	}
	
	componentWillUnmount() {
		clearTimeout( this.state.timer );
	}
	
	autoChangeImage() {
		console.log( 'change' );
		if (Math.random() > 0.7) {
		
		}
	}
	
	heartAdd() {
		/**
		 * Add location to favorites
		 */
		if (this.state.heart) {
			this.setState( {heart: null} );
			console.log( `Location ${this.props.location.id} removed of bookmarks` );
			
		} else {
			this.setState( {heart: {fill: 'red', transform: 'rotate(360deg) scale(1.2)', transition: '0.3s'}} );
			console.log( `Location ${this.props.location.id} added to bookmarks` );
		}
	}
	
	next() {
		/**
		 * Slides in images
		 */
		const animation_time = 0.1; /* secondes */
		if (this.state.imageASrc < this.props.location.contextualPictures.length - 1) {
			
			this.setState( {
				imageAStyle: {animation: `fadeInNext ${animation_time}s`},
			} );
			
			setTimeout( () => {
				this.setState( {
					imageAStyle: null,
					imageBSrc: this.state.imageBSrc + 1,
				} );
			}, animation_time * 1000 );
			
			this.setState( {imageASrc: this.state.imageASrc + 1} );
		} else {
			this.setState( {
				imageASrc: 0,
				imageBSrc: this.props.location.contextualPictures.length - 1,
				imageAStyle: {animation: `fadeInNext ${animation_time}s`},
			} );
			
			setTimeout( () => {
				this.setState( {
					imageAStyle: null,
					imageBSrc: 0,
				} );
			}, animation_time * 1000 );
			
			//this.setState( {imageASrc: this.state.imageASrc + 1} );
		}
	}
	
	previous() {
		/**
		 * Slides in images
		 */
		if (this.state.imageASrc > 0) {
			
			const animation_time = 0.1; /* secondes */
			
			this.setState( {
				imageAStyle: {zIndex: '-1'},
				imageBStyle: {animation: `fadeInPrevious ${animation_time}s`},
				
			} );
			
			setTimeout( () => {
				this.setState( {
					imageAStyle: null,
					imageBStyle: null,
					imageASrc: this.state.imageASrc - 1,
				} );
			}, animation_time * 1000 );
			
			this.setState( {imageBSrc: this.state.imageBSrc - 1} );
		}
	}
	
	formatDate() {
		let dateA = new Date( this.props.location.checkin );
		let dateB = new Date( this.props.location.checkout );
		if (dateA.getMonth() === dateB.getMonth()) {
			return `${dateA.getDate()}-${dateB.getDate()} ${dateA.toLocaleString( 'en', {month: 'short'} ).slice( 0, 3 )}.`;
		} else {
			return `${dateA.getDate()} ${dateA.toLocaleString( 'en', {month: 'short'} ).slice( 0, 3 )}.-${dateB.getDate()} ${dateB.toLocaleString( 'en', {month: 'short'} ).slice( 0, 3 )}.`;
		}
	}
	
	render() {
		console.log( 'Carousel rendering', this.props.index );
		return (
			<div className="container">
				<div className="picturesWrapper">
					<div className="pictures">
						<img style={this.state.imageBStyle} className={'picture second'}
						     src={this.props.location.contextualPictures[this.state.imageBSrc]}
						     alt={this.props.location.title}/>
						
						<img style={this.state.imageAStyle} className={'picture first'}
						     src={this.props.location.contextualPictures[this.state.imageASrc]}
						     alt={this.props.location.title}/>
					</div>
					<InteractionWrapper key={this.props.index} previous={this.previous} next={this.next} heartAdd={this.heartAdd}
					location={this.props.location} heart={this.state.heart} removeElement={this.props.removeElement}/>
				</div>
				<div className="description">
					<p className="title"><strong>{this.props.location.title}</  strong></p>
					<p className="date">{this.formatDate().toLowerCase()}</p>
					<p className="price"><strong>{this.props.location.price}</strong> nuit</p>
					<p className="star">
                    <span><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" role="presentation"
                               focusable="false">
                    <path
	                    d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path></svg></span>
						{this.props.location.rating}
					</p>
				</div>
			</div>
		);
		
	};
}


export default Carousel;
