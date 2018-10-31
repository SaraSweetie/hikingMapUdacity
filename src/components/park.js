import React from 'react'

const Park = (props) => {
    return (
    	props.filteredSearch.map( (park, key) => (
            <div onClick={ () => props.listClick(key)}
                id={park.parkCode} key={key} tabIndex="0" >
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