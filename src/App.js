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
        sidebarToggle: false,
        markerOpen: false
      };
  }    

  componentDidMount () {
    this.getParks();
    //this.renderMap() // moved to callback of getParks();
  }

  getParks = async () => {
    fetch('https://api.nps.gov/api/v1/parks?parkCode=aplo,appa,dele,dewa,edal,eiae,frst,flni,fone,frhi,gett,glde,hofu,inde,jofl,oire,rist,stea,thko,upde,vafo&api_key=FMZGAe5Z3Ul0VSW28IfUmTBXwaFYjBDQ6Wpw2Rsf%2CCO%2CNM%2CUT&limit=70&fields=images&sort=name')
      .then(results => results.json())
      .then(results => {
        this.setState({parks: results.data})
          //console.log(results.data) // returns array of 23 parks
    }, this.renderMap())
  }

  renderMap = () => {
    Utils.loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCuiW5creiml57NOunZtpggZ59_XjAl5FI&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
      var map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.203323, lng: -77.194527},
        zoom: 8,
      });

      var infowindow = new window.google.maps.InfoWindow();
      
      const bounds = new window.google.maps.LatLngBounds();

      this.state.parks.map( park => {
        var contentString = `${park.fullName}`;

                //console.log(park.latLong);
                let latLong = park.latLong.split(', '); // splits latLong into two at , stores in an array
                let remvLat = latLong[0].slice(4); // remove lat: (returns a string)
                let remvLong = latLong[1].slice(5); // remove long: (returns a string)
                //console.log(remvLat, remvLong);
                let latNum = parseFloat(remvLat); // convert to floating point
                let longNum = parseFloat(remvLong); // convert to floating point
                //console.log(latNum, longNum);
                var marker = new window.google.maps.Marker({
                    position: new window.google.maps.LatLng(latNum, longNum),
                    animation: window.google.maps.Animation.DROP,
                    map: map,
                    title: park.name
                });

        marker.addListener('click', function() {
          //update infowinow content
          infowindow.setContent(contentString)
          infowindow.open(map, marker);
          //.setState({markerOpen: true})
          console.log(marker);
        });

        bounds.extend(marker.position);
      })
      map.fitBounds(bounds);
  }

  //toggle visability of sidebar with Button
  menuToggle = () => {
    this.setState((prevState) => {
      return {sidebarToggle: !prevState.sidebarToggle};
    });
  }

  render() {
    return (
      <div className="App">
        <Header {...this.state.sidebarToggle} menuToggle={this.menuToggle}/>

        <main>
          <Sidebar {...this.state} />
          <Map {...this.state} iwToggle={this.iwToggle} />
        </main>
      
        <Footer />
      </div>
    );
  }
}

export default App;