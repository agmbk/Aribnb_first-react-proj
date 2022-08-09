import React from 'react';

export class Carousel extends React.Component {
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
		console.log('BARAMEX !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
		return (
			<div className="container">
				<div className="image">
					<picture>
						<img style={this.state.imageBStyle} className={'picture second'}
						     src={this.state.images[this.state.imageBSrc]} alt={this.props.location.place}/>
						
						<img style={this.state.imageAStyle} className={'picture first'}
						     src={this.state.images[this.state.imageASrc]} alt={this.props.location.place}/>
						
						<div style={{cursor: 'pointer', pointerEvents: 'none'}}>
							<svg style={this.state.heart} className={'heart'} viewBox="0 0 32 32"
							     xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false">
								<path onClick={event => this.heartAdd()}
								      d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
							</svg>
						</div>
						
						<div style={{cursor: 'pointer', pointerEvents: 'none'}}>
							<svg className={'bin'} width="1280.000000pt" height="1280.000000pt"
							     viewBox="0 0 1280.000000 1280.000000">
								<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
									<path onClick={event => this.props.removeElement( this.props.index )}
									      d="M1067 11733 l-1067 -1068 2132 -2132 2133 -2133 -2133 -2133 -2132-2132 1067 -1068 1068 -1067 2132 2132 2133 2133 2133 -2133 2132 -2132 1068 1067 1067 1068 -2132 2132 -2133 2133 2133 2133 2132 2132 -1067 1068 -1068 1067 -2132 -2132 -2133 -2133 -2133 2133 -2132 2132 -1068 -1067z"/>
								</g>
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
	
	function event() {
		/**
		 * Slides in images
		 */
		if (parent.state.imageASrc < parent.state.images.length - 1) {
			
			const animation_time = 0.1; /* secondes */
			
			parent.setState( {
				imageAStyle: {animation: `fadeInNext ${animation_time}s`},
			} );
			
			setTimeout( () => {
				parent.setState( {
					imageAStyle: null,
					imageBSrc: parent.state.imageBSrc + 1,
				} );
			}, animation_time * 1000 );
			
			parent.setState( {imageASrc: parent.state.imageASrc + 1} );
		}
	}
	
	return (
		<button
			style={parent.state.imageASrc === parent.state.images.length - 1 ? {opacity: '0', cursor: 'inherit'} : null}
			type="button" className="carousel-button next" onClick={event}><span><svg viewBox="0 0 32 32"
		                                                                              xmlns="http://www.w3.org/2000/svg"
		                                                                              aria-hidden="true"
		><g fill="none"><path
			d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></span>
		</button>
	);
}

function buttonPrevious(parent) {
	/**
	 * The carousel previous button
	 * Hidden when the first picture is shown
	 */
	
	function event() {
		/**
		 * Slides in images
		 */
		if (parent.state.imageASrc > 0) {
			
			const animation_time = 0.1; /* secondes */
			
			parent.setState( {
				imageAStyle: {zIndex: '-1'},
				imageBStyle: {animation: `fadeInPrevious ${animation_time}s`},
				
			} );
			
			setTimeout( () => {
				parent.setState( {
					imageAStyle: null,
					imageBStyle: null,
					imageASrc: parent.state.imageASrc - 1,
				} );
			}, animation_time * 1000 );
			
			parent.setState( {imageBSrc: parent.state.imageBSrc - 1} );
		}
	}
	
	return (
		<button style={!parent.state.imageASrc ? {opacity: '0', cursor: 'inherit'} : null} type="button"
		        className="carousel-button previous" onClick={event}><span><svg viewBox="0 0 32 32"
		                                                                        xmlns="http://www.w3.org/2000/svg"
		                                                                        aria-hidden="true"
		><g fill="none"><path
			d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg></span>
		</button>
	);
}
