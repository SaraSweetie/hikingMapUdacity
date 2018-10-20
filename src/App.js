import React from 'react'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Map from './components/map'
import * as Utils from "./Utils/index.js";
import Footer from './components/footer'

class App extends React.Component {
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

  componentDidMount () {
    this.renderMap();
  }

  componentWillMount() {
    this.getParks();
  }

  renderMap = () => {
    Utils.loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCuiW5creiml57NOunZtpggZ59_XjAl5FI&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 41.203323, lng: -77.194527},
      zoom: 8
    });
    
    var marker = new window.google.maps.Marker({
      position: {lat: 41.203323, lng: -77.194527},
      map: map,
      title: 'Center of PA'
    });
  }

  getParks = async () => {
    fetch('https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=PA&api_key=FMZGAe5Z3Ul0VSW28IfUmTBXwaFYjBDQ6Wpw2Rsf')
      .then(results => results.json())
      .then(results => {
        this.setState({parks: results.data,})
      })
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <Sidebar {...this.state.parks} />
          <Map />
        </main>
      
        <Footer />
      </div>
    );
  }
}

export default App;