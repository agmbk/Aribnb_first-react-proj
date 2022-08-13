import React, { PureComponent } from 'react';

class Header extends PureComponent {
	/**
	 * Handle location creating and removing
	 * @param props
	 */
	constructor(props) {
		super( props );
		this.errorReset = this.errorReset.bind( this );
		this.formChecker = this.formChecker.bind( this );
		this.state = {
			error: {
				title: null,
				checkin: null,
				checkout: null,
				price: null,
				file: null,
			},
			submit: null,
		};
		console.log( 'Header' );
	}
	
	errorReset() {
		this.setState( {
			error: {
				title: null,
				checkin: null,
				checkout: null,
				price: null,
				file: null,
			},
		} );
	}
	
	formChecker(event) {
		event.preventDefault();
		
		/** Empty fields handler */
		
		if (!Object.values( event.target ).every( element => element.value !== '' ) || event.target.checkin.value >= event.target.checkout.value || !event.target.file.files.length) {
			
			const animation_time = 0.3; /* secondes */
			const shake = {animation: `shake ${animation_time}s`}, red = {borderColor: 'red'};
			let title = null, checkin = null, checkout = null, price = null, file = null;
			
			if (!event.target.title.value) {title = shake;}
			if (!event.target.checkin.value) {checkin = shake;}
			if (!event.target.checkout.value) {checkout = shake;} else if (event.target.checkin.value >= event.target.checkout.value) {
				checkin = {
					borderColor: 'red',
					animation: `shake ${animation_time}s`,
				};
				checkout = {borderColor: 'red', animation: `shake ${animation_time}s`};
			}
			if (!event.target.file.files.length) {file = shake;}
			
			if (!event.target.price.value) {
				price = shake;
			} else if (isNaN( event.target.price.value )) {price = {...shake, ...red};}
			
			this.setState( {error: {title, checkin, checkout, price, file}} );
			
			setTimeout( () => {
				this.setState( {
					error: {
						title: null,
						checkin: checkin ? checkin === shake ? null : red : null,
						checkout: checkout ? checkout === shake ? null : red : null,
						price: price ? price === shake ? null : red : null,
						file: null,
					},
				} );
			}, animation_time * 1000 );
		} else {
			const animation_time = 0.3; /* secondes */
			this.setState( {submit: {border: '2px solid #00b60f'}} );
			
			setTimeout( () => {
				this.setState( {
					submit: null,
				} );
			}, animation_time * 1000 );
			this.errorReset();
			this.props.addElement( event.target );
		}
	}
	
	render() {
		console.log( 'Header rendering' );
		return (
			<header id={'header'}>
				<input type="checkbox" id="formDisplay"/>
				<label htmlFor={'formDisplay'}>
					<h2>Add a new location</h2>
				</label>
				
				<form onSubmit={event => this.formChecker( event )}>
					<fieldset>
						
						<p style={this.state.error.title}>
							<label>Location</label>
							<input autoComplete="off"
							       placeholder="Location" id={'title'}/>
						</p>
						
						<p style={this.state.error.checkin}>
							<label>Starting date</label>
							<input type="date" autoComplete="off" name="checkin"
							       id="checkin"/>
						</p>
						
						<p style={this.state.error.checkout}>
							<label>Ending date</label>
							<input type="date" autoComplete="off" name="checkout"
							       id="checkout"/>
						</p>
						
						<p style={this.state.error.price}>
							<label>Price</label>
							<input autoComplete="off" placeholder="Price"
							       id={'price'}/>
						</p>
						
						<p style={this.state.error.file}>
							<label id={'label-file'} htmlFor={'file'}>Add image</label>
							<span></span>
							<input autoComplete="off" placeholder="Images" type="file" multiple accept={'image/*'}
							       id={'file'}/>
						</p>
						<div>
							<p style={this.state.submit}>
								<input className={'submit'} type="submit" value="Ajouter"/>
							</p>
						</div>
					</fieldset>
				</form>
			
			</header>
		);
	}
}

export default Header;