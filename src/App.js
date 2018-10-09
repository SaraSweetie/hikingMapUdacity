import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount () {
    window.initMap= this.initMap()
  }

  initMap = () => {
        let map = new window.google.maps.Map(document.getElementById('map'), {
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


export default App;
