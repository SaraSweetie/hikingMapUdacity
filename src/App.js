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
    this.renderMap()
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
      
      console.log(`parks: ${this.state.parks}`) // returns array of park objects - EMPTY...
      // this marker works
      var marker = new window.google.maps.Marker({
        position: {lat: 41.203323, lng: -77.194527},
        map: map,
        title: 'Center of PA'
      });


      this.state.parks.map( park => {
        
        console.log(`All 23 parks?: ${park}`) // returns array of park objects
                var latLong = park.latLong.split(', '); // splits latLong into two at , stores in an array
                var remvLat = latLong[0].slice(3); // remove lat: (returns a string)
                var remvLong = latLong[1].slice(4); // remove long: (returns a string)
        
                var latNum = parseFloat(remvLat); // convert to floating point
                var longNum = parseFloat(remvLong); // convert to floating point
        
                var marker = new window.google.maps.Marker({
                    position: {lat: latNum, lng: longNum},
                    map: map,
                    title: park.name
                });

      })
  }

  getParks = async () => {
    fetch('https://developer.nps.gov/api/v1/parks?parkCode=aplo,appa,cajo,cbpo,cbgn,dele,dewa,edal,eiae,frst,flni,fone,frhi,gett,glde,hofu,inde,jofl,jthg,oire,rist,stea,thko,upde,vafo&api_key=FMZGAe5Z3Ul0VSW28IfUmTBXwaFYjBDQ6Wpw2Rsf')
      .then(results => results.json())
      .then(results => {
        this.setState({parks: results.data,})
          console.log(results.data) // returns array of 23 parks
    })
  }

  //toggle visability of sidebar with button
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
          <Map {...this.state} />
        </main>
      
        <Footer />
      </div>
    );
  }
}

export default App;