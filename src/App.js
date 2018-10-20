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
    
    console.log(this.state.parks) // retuns 30 PA parks

      var latLongTEST = this.state.parks[5].latLong.split(', '); // splits latLong into 2 at ,
      var latitudeTEST = latLongTEST[0].slice(3);
      var longitudeTEST = latLongTEST[1].slice(4);
      //working get good results below
      console.log(latLongTEST)
      console.log(latitudeTEST)
      console.log(longitudeTEST)
      console.log(typeof longitudeTEST) // string
      console.log(typeof parseFloat(longitudeTEST)) //number


    this.state.parks.map( park => {
     console.log(this.park) // returned undefined.... why?

     //NPS API returns latLong as a string example: "lat:40.42977467, long:-78.57431622"
      var latLong = park.latLong.split(', '); // splits latLong into two at , stores in an array
      var remvLat = latLong[0].slice(3); // remove lat: (returns a string)
      var remvLong = latLong[1].slice(4); // remove long: (returns a string)

      var latNum = parseFloat(remvLat); // convert to floating point
      var longNum = parseFloat(remvLong); // convert to floating point

      var marker = new window.google.maps.Marker({
        position: {lat: latNum, lng: longNum},
        map: map,
      });


      // this marker works
      var marker = new window.google.maps.Marker({
        position: {lat: 41.203323, lng: -77.194527},
        map: map,
        title: 'Center of PA'
      });
    })
  }


  getParks = async () => {
    fetch('https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=PA&api_key=FMZGAe5Z3Ul0VSW28IfUmTBXwaFYjBDQ6Wpw2Rsf')
      .then(results => results.json())
      .then(results => {
        this.setState({parks: results.data,})
      },this.renderMap())
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