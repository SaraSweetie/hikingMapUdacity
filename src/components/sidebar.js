import React from 'react'

const Sidebar = (props) => {
        return (
            <section id="sidebar">

              <div id="filter">
                <p>State Park</p>
                <p>visitors center</p>
                <p>trail length</p>
                <p>diffculitly</p>
              </div>

              <ul id="filterResults">
                <li>some text here</li>
                <li>some text here</li>
                <li>some text here</li>
                <li>some text here</li>
                <li>some text here</li>
                <li>some text here</li>
              </ul>

          </section>
		);
}

export default Sidebar;