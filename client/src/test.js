const addHours = 234;
const addMins = 15;

const date_start = new Date();

const date_now = new Date();
date_now.setHours( new Date().getHours() + addHours, new Date().getMinutes() + addMins );

const difference = date_now - date_start;
const days = Math.floor( difference / (36e5 * 24) );
const hours = Math.floor( difference / 36e5) % 24;
const minutes = Math.floor( difference / 6e4 ) % 60;


console.log( `
${date_start.toString()}
${date_now.toString()}

It's been ${days} day${days > 1 ? 's' : ''} ${hours} Hour${hours > 1 ? 's' : ''} ${minutes} Minute${minutes > 1 ? 's' : ''}
`);