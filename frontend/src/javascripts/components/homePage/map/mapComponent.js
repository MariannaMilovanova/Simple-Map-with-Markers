import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { KEY } from '../../configuration/apiKeys';
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import SelectCategory from './selectCategory';
import _ from 'lodash';

class MapComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
        showLocation: this.props.showLocation,
        locationMarker: false,
        center: {
                  lat: this.props.coords ? this.props.coords.latitude : 50.4501, 
                  lng: this.props.coords? this.props.coords.longitude : 30.523400000000038
                },
        bounds: null,
        select:'',
        chosenPlaces:[],
        category: this.props.category
      }
    }
  componentDidMount(){
    if (this.props.coords) {
      this.props.getCurrentLocation(this.props.coords)
    }
  }
  componentWillReceiveProps(nextProps) {
     if (nextProps.category!=this.props.category) {
      this.setState({
        category: nextProps.category
      })
    }
    if (nextProps.showLocation & nextProps.center) {
      this.setState({
        showLocation: nextProps.showLocation
      })
    }
    if (nextProps.map && this.props.showLocation == nextProps.showLocation) {
      this.setState({
        markers: nextProps.map.userMarkers
      })
    }
    if (this.props.center !== nextProps.center) {
      this.setState({
        center: nextProps.center
      })
    }
  }
  
  onBoundsChanged = () => {
    let bounds = this.refs.map.getBounds();
    let center = this.refs.map.getCenter();
    this.setState({
      bounds: bounds,
      center: center,
    })
  }
  onCategoryChoice = (category) => {
    let center = this.refs.map.getCenter();
    let stateCenter = { lat: center.lat(), lng: center.lng()}
    const placesUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    let placesToMap = (radius) => {

      return fetch(PROXY_URL + placesUrl  + 
                '&location=' + stateCenter.lat + ',' + stateCenter.lng + 
                '&radius=' + radius +
                '&type='+ category +
                '&key=' + KEY, {
        method: 'GET', 
        headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
                },
        })
        .then((response) => response.json())
        .catch((error) => error.data);
    }
    return Promise.all([
       placesToMap(1000)       
    ])  
    .then((places)=> {
      if (places[0].status === "ZERO_RESULTS") {
        return placesToMap(10000)
      } else {
        return places
      }})
    .then((places)=> {
      let nextMarkers;
      
      if (Array.isArray(places)) {
        nextMarkers = places[0].results.map(place => ({
          position: place.geometry.location,
        }));  
      } else {
        nextMarkers = places.results.map(place => ({
          position: place.geometry.location,
        }));
      }
      
      const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
      
      this.setState({
        center: nextCenter,
        chosenPlaces: nextMarkers
      })
    }) 
  }
  handleMapClick = (event) => {
    function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
      });
    }
    let markers = [...this.state.markers] 
    let coords = { id: uuidv4(), lat: event.latLng.lat(), lng: event.latLng.lng() }
    markers.push(coords)
    this.props.addMarker(coords)
  }
  
  deleteMarker = (index) => {
    let markers = [...this.props.markers]
    this.props.deleteMarker(markers[index]);
  }
  onCloseClick = () => {
    this.props.closeInfoAboutCurrentLocation(false);
  }
  onMapDrag=()=> {
    this.setState({showLocation: false, locationMarker: true})
  }
  render() {
    let image = require('../../../../images/beachflag.png');
    let locationImg = require('../../../../images/currentLocation.png');
    let currentLocation = this.props.coords ? {lat: this.props.coords.latitude, lng: this.props.coords.longitude} : 'none'
    return (
      <GoogleMap
        ref='map'
        defaultZoom={13}
        center={this.state.center}
        onClick={this.handleMapClick}
        onBoundsChanged={this.onBoundsChanged}
        onDrag={this.onMapDrag}
      >
        {currentLocation != 'none' && this.state.showLocation && <InfoWindow position={currentLocation} onCloseClick={this.onCloseClick}>
            <div>
              Location found
            </div>
          </InfoWindow>
        }
        {currentLocation != 'none' && this.state.locationMarker && <Marker position={currentLocation} icon={locationImg} image/>}
        {this.props.showMarkers && this.props.markers.map((marker, i)=> {
          return <Marker position={marker} key={i} icon={image} image onClick={(event, marker)=>this.deleteMarker(i)}/>
        })}
          <SelectCategory onCategoryChoice={this.onCategoryChoice}/>
        {this.state.chosenPlaces.map((marker, index) =>
          <Marker key={index} position={marker.position} />
        )}
      </GoogleMap>
    )
  }
}


export default compose(withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }), withGoogleMap)(MapComponent)