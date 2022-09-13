import React from 'react';

const ripple = () => {
	return (
		<div className="lds-ringWrapper">
			<div className="lds-ripple">
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default ripple;