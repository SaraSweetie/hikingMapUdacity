import React from 'react'

const Map = (props) => {
	return (
    	<div id="map"
    		onClick={props.iwToggle}
        	onKeyPress={props.iwToggle}>
       	</div>
    );
}

export default Map;