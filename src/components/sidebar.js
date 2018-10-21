import React from 'react'
import Park from './park'

class Sidebar extends React.Component {
  constructor(props) {
        super(props);
            this.state = {
              parks: [],
              mapCenter: {
                lat: 41.203323,
                lng: -77.194527},
              sidebarToggle: false
            };
    }   
  render() {
    return (
            <section id="sidebar">

              <div id="filter">
                <h2>Filter Parks</h2>
                <p>State Park</p>
                <p>visitors center</p>
                <p>trail length</p>
                <p>diffculitly</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta, est eu sodales fermentum, enim.

</p>
              </div>

              <h2>Parks</h2>
              <ul id="filterResults">
                <Park />
              </ul>
          </section>
    );
  }
}

export default Sidebar;