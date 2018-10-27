import React from 'react'
import Park from './park'

const Sidebar = (props) => {
  return (
    <section id="sidebar" className={props.sidebarToggle ? "open" : null }>

      <div id="filter">
        <h2>Filter Parks</h2>
        <button>State Park</button>
        <button>Visitors center</button>
        <button>Events</button>
      </div>

      <h2>Parks</h2>
      <ul id="filterResults">
        <Park {...props} />
      </ul>
      </section>
  );
}

export default Sidebar;