import React, { Component } from 'react'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Map from './components/map'
import Footer from './components/footer'


const APIkeyNPS = "FMZGAe5Z3Ul0VSW28IfUmTBXwaFYjBDQ6Wpw2Rsf";

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
          center: {lat: 41.203323, lng: -77.194527},
          zoom: 8
        });
  }

  getParks = async () => {
    const APIcall = await fetch(`https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=PA&api_key=${APIkeyNPS}`);
    const parks = await APIcall.json();
    console.log(this.parks.data.title);
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <Sidebar />
          <Map />
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