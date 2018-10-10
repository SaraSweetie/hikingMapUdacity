import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount () {
    this.renderMap()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCuiW5creiml57NOunZtpggZ59_XjAl5FI&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>title</h1>
        </header>  
        <main>
          <div id="map"></div>
        </main>
      </div>
    );
  }
}


  function loadScript(src) {
    var index = window.document.getElementsByTagName('script')[0]
    var script = window.document.createElement('script')
    script.src = src
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
  }

export default App;
