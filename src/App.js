import React from 'react'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Map from './components/map'
import * as Utils from "./Utils/index.js"
import Footer from './components/footer'

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        parks: [],
        markers: [],
        activeMarker: {},
        iwOpen: false,
        //center of PA to start
        mapCenter: {
          lat: 41.203323,
          lng: -77.194527},
        zoom: 8,
        sidebarToggle: false,
        searchQuery: '',
        filteredSearch: []
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
        this.setState({
          parks: results.data,
          filteredSearch: results.data
        })
          //console.log(results.data) // returns array of parks
    }, this.renderMap())
  }

  renderMap = () => {
    Utils.loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCuiW5creiml57NOunZtpggZ59_XjAl5FI&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = (parks) => {
      var map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: this.state.mapCenter.lat, lng: this.state.mapCenter.lng},
        zoom: this.state.zoom,
      });

      var infowindow = new window.google.maps.InfoWindow();
      
      const bounds = new window.google.maps.LatLngBounds();

      this.state.parks.map( (park, index) => {
        var contentString = `<h2>${park.fullName}</h2>
                            <p>${park.description} <a href="${park.directionsUrl}">Directions</a></p>`;

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
                    key: index,
                    title: park.name
                });

        marker.addListener('click', () => {
          //update infowinow content
          infowindow.setContent(contentString)
          infowindow.open(map, marker);

          this.setState({
            iwOpen: true,
            activeMarker: marker
          });
          this.markerClick(marker);
          //console.log(marker);
          //console.log(this.state.activeMarker);
          //console.log(index);
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

  //close info window when map clicked
  iwClose = (map, infowindow) => {
    map.onClick = () => {
      this.setState({iwOpen: false});
    }
  }
  //handle Marker Clicks
  markerClick = marker => {
    console.log(marker.key) // returns key of marker
  }

  //handle Sidebar Clicking
  listClick = key => {
    console.log(key) // returns key of park
  }

  //sidebar search
  updateQuery = (newQuery) => {
    //gets search terms from input in sidebar
    this.setState({ 
      searchQuery: newQuery,
      filteredSearch: this.filterParks(this.state.parks, this.state.searchQuery)}
    );
  }

  filterParks = (parks, newQuery) => {
    //parks from componentDidMount, newQuery from sarch update
    //console.log(this.state.parks)
    //console.log(this.state.filteredSearch)
    //console.log(this.state.searchQuery.length)

    if (this.state.searchQuery.trim() !== '' || this.state.searchQuery !== undefined ){
      return parks.filter(park => park.fullName.toLowerCase().includes(newQuery.toLowerCase()));
      //this.setState({parks: this.state.filteredSearch}) // this breaks it?
    }if (this.state.searchQuery.length <= 1) {
      this.setState({
        parks: this.state.parks,
        filteredSearch: []
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header {...this.state.sidebarToggle} menuToggle={this.menuToggle}/>

        <main>
          <Sidebar {...this.state} updateQuery={this.updateQuery} listClick={this.listClick}/>
          <Map role="application" aria-label="map" {...this.state}/>
        </main>
      
        <Footer />
      </div>
    );
  }
}

export default App;