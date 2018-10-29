import React from 'react'

const Park = (props) => {
    return (
    	props.parks.map( park => (
            <div id={park.parkCode} key={park.parkCode} tabIndex="1" >
            	<h3>{park.fullName}</h3>
            	<figure>
            		<img src={park.images[0].url} alt={park.images[0].altText}/>
            		<figcaption>{park.images[0].caption}</figcaption>
            	</figure>
                <p>Learn more: <a href={park.url}>{park.name}</a></p>
            </div>
    	))
    );

}

export default Park;