const {parse} = require( 'node-html-parser' );
const fs = require( 'fs' );

const file = './src/images.txt';
if (fs.existsSync( file )) {
	fs.unlinkSync( file );
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

(function () {
	let a = []
	locations.map((place, date, price, img) => a.push(place.img))
	console.log(a);
})();

(async function () {
	const response = await (await require( 'node-fetch' )("https://www.airbnb.fr/", {
		"body": null,
		"method": "GET"
	})).text();
	const airbnb = parse( response );
	const logger = fs.createWriteStream( file, {
		flags: 'a',
	} );
	const urls = []
	for (const link of airbnb.querySelectorAll( 'link' )) {
		const url = link.attrs.href;
		if (url.startsWith('https://a0.muscache.com/im/pictures/') && !urls.includes(url)) {
			logger.write(url + '\n')
			urls.push(url)
		}
	}
})//();