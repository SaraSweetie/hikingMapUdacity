import React from 'react'
import Park from './park'

const Sidebar = (props) => {
  return (
    <section id="sidebar" className={props.sidebarToggle ? "open" : null }>

      <div id="filter">
        <input type="search" id="search" aria-label="Search the parks" placeholder="Search Parks" 
          value={props.searchQuery}
          onChange={(e) => props.updateQuery(e.target.value)}
        />
      </div>

      <h2>Parks</h2>
        <section id="filterResults">
          <Park {...props} listClick={props.listClick}/>
        </section>
      </section>
  );
}

export default Sidebar;