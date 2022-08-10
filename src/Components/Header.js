import React from 'react';

export class Header extends React.Component {
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
				place: null,
				dateA: null,
				dateB: null,
				price: null,
				file: null,
			},
			submit: null,
		}
		console.log('Header');
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
	
	formChecker(event) {
		event.preventDefault();
		
		/** Empty fields handler */
		
		if (!Object.values( event.target ).every( element => element.value !== '' ) || event.target.dateA.value >= event.target.dateB.value || !event.target.file.files.length) {
			
			const animation_time = 0.3; /* secondes */
			const shake = {borderColor: 'red', animation: `shake ${animation_time}s`}, red = {borderColor: 'red'};
			let place = null, dateA = null, dateB = null, price = null, file = null;
			
			if (!event.target.place.value) {place = shake;}
			if (!event.target.dateA.value) {dateA = shake;}
			if (!event.target.dateB.value) {dateB = shake;}
			else if (event.target.dateA.value >= event.target.dateB.value) {
				dateA = {
					borderColor: 'red',
					animation: `shake ${animation_time}s`,
				};
				dateB = {borderColor: 'red', animation: `shake ${animation_time}s`};
			}
			if (!event.target.file.files.length) {file = shake;}
			
			if (!event.target.price.value || isNaN( event.target.price.value )) {
				price = {
					borderColor: 'red',
					animation: `shake ${animation_time}s`,
				};
			}
			
			this.setState( {error: {place, dateA, dateB, price, file}} );
			
			setTimeout( () => {
				this.setState( {
					error: {
						place: place ? red : null,
						dateA: dateA ? red : null,
						dateB: dateB ? red : null,
						price: price ? red : null,
						file: file ? red : null,
					},
				} );
			}, animation_time * 1000 );
		} else {
			const animation_time = 0.3; /* secondes */
			this.setState( {submit: {border: '2px solid #00b60f'}})
			setTimeout( () => {
				this.setState( {
					submit: null,
				} );
			}, animation_time * 1000 );
			this.errorReset();
			this.props.addElement(event.target)
		}
	}
	
	render() {
		console.log('Header rendering');
		return (
			<header>
				
				<div className={'header'}>
					
					<form onSubmit={event => this.formChecker( event )}>
						<fieldset>
							<legend><h2>Add a new location</h2></legend>
							<p style={this.state.error['place']}>
								<label>Location</label>
								<input autoComplete="off"
								       placeholder="Location" id={'place'}/>
							</p>
							
							<p style={this.state.error['dateA']}>
								<label>Starting date</label>
								<input type="date" autoComplete="off" name="dateA"
								       id="dateA"/>
							</p>
							
							<p style={this.state.error['dateB']}>
								<label>Ending date</label>
								<input type="date" autoComplete="off" name="dateB"
								       id="dateB"/>
							</p>
							
							<p style={this.state.error['price']}>
								<label>Price</label>
								<input autoComplete="off" placeholder="Price"
								       id={'price'}/>
							</p>
							
							<p style={this.state.error['file']}>
								<label id={'label-file'} htmlFor={'file'}>Add image</label>
								<div></div>
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
				</div>
			</header>
		)
	}
}