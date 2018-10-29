import React from 'react'
import Park from './park'

const Sidebar = (props) => {
  return (
    <section id="sidebar" className={props.sidebarToggle ? "open" : null }>

      <div id="filter">
        <h2>Filter</h2>
        <input type="search" id="search" placeholder="Search Parks" 
          onChange={e => props.updateQuery(e.target.value)}
          value={props.searchQuery}
        />
      </div>

      <h2>Parks</h2>
        <section id="filterResults">
          <Park {...props} handleListClick={props.handleListClick}/>
        </section>
      </section>
  );
}

export default Sidebar;