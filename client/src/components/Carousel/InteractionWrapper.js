import { useState } from 'react';
import { removeElement } from '../../lib/hooks/elementHandler';


/**
 * Image interactions (buttons, like, delete)
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
function InteractionWrapper(props) {
	const [heart, setHeart] = useState( false );
	
	console.log( 'InteractionWrapper rendering' );
	
	return (
		<div className="interactionWrapper">
			<div className="actions">
				<div>
					<svg className="heart"
					     onClick={() => setHeart( (prevState) => !prevState )}
					     style={heart ? {
						     fill: 'red',
						     transform: 'rotate(360deg) scale(1.2)',
						     transition: '0.3s',
					     } : {}}
					     viewBox="0 0 32 32"
					     xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false">
						<path
							d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
					</svg>
				</div>
				<div>
					<svg className="bin"
					     onClick={() => props.setLocations( (prevState) => removeElement( prevState, props.location ) )}
					     width="1280.000000pt" height="1280.000000pt"
					     viewBox="0 0 1280.000000 1280.000000">
						<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
							<path
								d="M1067 11733 l-1067 -1068 2132 -2132 2133 -2133 -2133 -2133 -2132-2132 1067 -1068 1068 -1067 2132 2132 2133 2133 2133 -2133 2132 -2132 1068 1067 1067 1068 -2132 2132 -2133 2133 2133 2133 2132 2132 -1067 1068 -1068 1067 -2132 -2132 -2133 -2133 -2133 2133 -2132 2132 -1068 -1067z"/>
						</g>
					</svg>
				</div>
			</div>
			<div className="buttons">
				<button id={'previous'}
				        style={props.buttonPrevVisible ? {} : {visibility: 'hidden', opacity: '0'}}
				        type="button" className="carousel-button previous"
				        onClick={() => props.previous()}><span><svg
					viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none"><path
					d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg></span>
				</button>
				<button id={'next'} style={props.buttonNextVisible ? {} : {visibility: 'hidden', opacity: '0'}}
				        type="button" className="carousel-button next"
				        onClick={() => props.next()}><span><svg
					viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none"><path
					d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></span>
				</button>
			</div>
		</div>
	);
}

export default InteractionWrapper;
