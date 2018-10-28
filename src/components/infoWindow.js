import React from 'react'

const InfoWindow = (park) => {
    return (
            <div>
            	<h3>{park.fullName}</h3>
            	<figure>
            		<img src={park.images[0].url} alt={park.images[0].altText}/>
            		<figcaption>{park.images[0].caption}</figcaption>
            	</figure>
                <p>Learn more: <a href={park.url}>{park.name}</a></p>
            </div>
    );

}

export default InfoWindow;