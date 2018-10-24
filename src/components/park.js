import React from 'react'

const Park = (props) => {
    return (
    	props.parks.map( park => (
            <li>
                <h3>{park.fullName}</h3>
                <p>Website <a href="{park.url}">{park.name}</a></p>
            </li>
    	))
    );

}

export default Park;