import React from 'react'

const Map = (props) => {
	return (
    	<div id="map"
    		onClick={props.iwClose}
        	onKeyPress={props.iwClose}>
       	</div>
    );
}

export default Map;