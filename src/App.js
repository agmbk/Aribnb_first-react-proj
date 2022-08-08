import './App.css';
import React from 'react';
import { useState } from 'react';

class Cart extends React.Component {
	constructor(props) {
		super( props );
		this.handleMouseOver=this.handleMouseOver.bind(this);
		this.handleMouseOut=this.handleMouseOut.bind(this);
		this.isHovering = false;
	};
	
	handleMouseOver() {
		this.isHovering = true;
	};
	
	handleMouseOut() {
		this.isHovering = false;
	};
	
	render() {
		const a = []
		locations.map((element, i) => {
			a.push(
				<div className="container">
				<div className="image">
					<picture onMouseOver={this.handleMouseOver()} onMouseOut={this.handleMouseOut()}>
						<img className={'picture'} src={locations[i].img} alt={i}/>
						<svg className={'heart'} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
						     role="presentation"
						     focusable="false">
							<path
								d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
						</svg>
						{button()}
					</picture>
					<p><strong>{locations[i].place}</  strong>
					
					
					</p>
					<p>{locations[i].date}</p>
					<p><strong>{locations[i].price} €</strong> nuit</p>
					<div className="star">
						<p>
                        <span className="s1dxllyb dir dir-ltr"><svg viewBox="0 0 32 32"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    aria-hidden="true" role="presentation"
                                                                    focusable="false">
                        <path
	                        d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                        ></path></svg></span>
							5,0
						</p>
					</div>
				</div>
				</div>
			)
		});
		return (a)
	}
}

function button() {
	return (
		<button aria-hidden="false" aria-label="Image suivante" type="button"
		        className="image_suivante" onClick={console.log( 'Clicked' )}><span
			className="_3hmsj"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
		                            aria-hidden="true" role="presentation" focusable="false"><g
			fill="none"><path
			d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></span>
		</button>
	);
	
}

function _images(i) {
	const [isHovering, setIsHovering] = useState( false );
	
	const handleMouseOver = () => {
		setIsHovering( true );
	};
	
	const handleMouseOut = () => {
		setIsHovering( false );
	};
	return (
		<div className="container">
		<div className="image">
			<picture onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
				<img className={'picture'} src={locations[i].img} alt={i}/>
				<svg className={'heart'} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
				     role="presentation"
				     focusable="false">
					<path
						d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
				</svg>
				{isHovering && (button())}
			</picture>
			
			<p><strong>{locations[i].place}</  strong></p>
			<p>{locations[i].date}</p>
			<p><strong>{locations[i].price} €</strong> nuit</p>
			<div className="star">
						
                        <span className="s1dxllyb dir dir-ltr"><svg viewBox="0 0 32 32"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    aria-hidden="true" role="presentation"
                                                                    focusable="false">
                        <path
	                        d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                        ></path></svg></span>
				<p>5,0</p>
			</div>
		</div>
		</div>
	);
}


function grid() {
	const items = [];
	for (let i = 0; i < locations.length; i++) {
		items.push(
			<>
			<div className="container">
				{_images( i )}
			</div>
			</>
		);
	}
	return (
		items
	);
}

function App() {
	return (
		<>
			<div className="carousel">
				<Cart></Cart>
			</div>
		</>
	);
}

const locations = [
	{
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
	},{
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
	},{
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
	},{
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
	},{
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
	},{
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
	}, {
		place: 'Badachro, Royaume-Uni',
		date: '22–27 oct.',
		price: '209',
		img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
	},
];


export default App;
