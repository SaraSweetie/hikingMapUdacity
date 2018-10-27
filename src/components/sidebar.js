import React from 'react'
import Park from './park'

const Sidebar = (props) => {
  return (
    <section id="sidebar" className={props.sidebarToggle ? "open" : null }>

      <div id="filter">
        <h2>Filter</h2>
        <button>State Parks</button>
        <button>Visitors center</button>
        <button>Campgrounds</button>
      </div>

      <h2>Parks</h2>
      <ul id="filterResults">
        <Park {...props} />
      </ul>
      </section>
  );
}

export default Sidebar;