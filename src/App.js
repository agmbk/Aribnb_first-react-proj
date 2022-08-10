import { Header } from './Components/Header';
import { Carousel } from './Components/Carousel';
import './App.css';
import React from 'react';



class App extends React.Component {
	/**
	 * Handle location creating and removing
	 * @param props
	 */
	constructor(props) {
		super( props );
		this.addElement = this.addElement.bind( this );
		this.removeElement = this.removeElement.bind( this );
		this.state = {
			location: locations,
		};
		console.log('App');
	}
	
	removeElement(id) {
		console.log( 'removing', id );
		const temp = this.state.location;
		console.log( this.state.location, temp );
		temp.splice( id, 1 );
		this.setState( {
			location: temp,
		} );
	}
	
	addElement(target) {
		
		/** Append the new location */
		
		function formatDate() {
			let dateA = new Date(target.dateA.value);
			let dateB = new Date(target.dateB.value);
			if (dateA.getMonth() === dateB.getMonth()) {
				return `${dateA.getDate()}-${dateB.getDate()} ${dateA.toLocaleString('en', { month: 'short' }).slice(0,3)}.`;
			} else {
				return `${dateA.getDate()} ${dateA.toLocaleString('en', { month: 'short' }).slice(0,3)}.-${dateB.getDate()} ${dateB.toLocaleString('en', { month: 'short' }).slice(0,3)}.`;
			}
		}
		
		this.setState( {
			location: [
				...this.state.location,
				{
					id: this.state.location.at( -1 ).id + 1,
					place: target.place.value,
					date: formatDate().toLowerCase(),
					price: target.price.value,
					img: Array.from( target.file.files ).map( URL.createObjectURL ),
				},
			],
		} );
		
		console.log( target.place.value, target.dateA.value, target.price.value );
		
	}
	
	render() {
		console.log('App rendering');
		return (
			<>
				<Header addElement={this.addElement} ></Header>
				<div className="carousel">
					{this.state.location.map( (e, i) => <Carousel location={e} key={e.id} index={i}
					                                              removeElement={this.removeElement}></Carousel> )}
				</div>
			</>
		);
	}
}

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

export default App;
