import React from 'react';
import ring from './ring';
import ripple from './ripple';


const Loader = ({animation}) => {
	if (animation === 'ripple') {
		return ripple;
	} else if (animation === 'ring') {
		return ring;
	}
};

export default Loader;