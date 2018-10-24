import React from 'react'
import Park from './park'

const Sidebar = (props) => {
  return (
    <section id="sidebar" className={props.sidebarToggle ? "open" : null }>

      <div id="filter">
        <h2>Filter Parks</h2>
        <p>State Park</p>
        <p>visitors center</p>
        <p>trail length</p>
        <p>diffculitly</p>
      </div>

      <h2>Parks</h2>
      <ul id="filterResults">
        <Park {...props} />
      </ul>
      </section>
  );
}

export default Sidebar;