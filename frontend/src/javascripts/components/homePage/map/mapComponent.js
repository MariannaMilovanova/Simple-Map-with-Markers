import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import _ from 'lodash';

class MapComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
        showLocation: this.props.showLocation,
        locationMarker: false,
        markers: [],
        center: {lat: this.props.coords.latitude, lng: this.props.coords.longitude},
        bounds: null,
        select:'',
        chosenPlaces:[]
      }
    }
  componentDidMount(){
    this.props.getCurrentLocation(this.props.coords)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.showLocation) {
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
    let mapBounds = this.refs.map.getBounds();
    this.props.getPlaces(mapBounds, 'store')
    this.setState({
      bounds: this.refs.map.getBounds(),
      center: this.refs.map.getCenter(),
    })
    //let service = this.refs.map.places.PlacesService(this.refs.map.getDiv());
            console.log(this.refs.map);
  }
  onPlacesChanged = (event) => {
    //const places = this.refs.searchBox.getPlaces();
    const places = this.refs.searchBox.getPlaces();
    this.setState({showLocation: false, locationMarker: true})
    console.log(places)
    const bounds = new google.maps.LatLngBounds();

    places.forEach(place => {
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport)
      } else {
        bounds.extend(place.geometry.location)
      }
    });
    const nextMarkers = places.map(place => ({
      position: place.geometry.location,
    }));
    const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

    this.setState({
      center: nextCenter,
      chosenPlaces: nextMarkers,
    });
  }


  handleMapClick = (event) => {
    let markers = [...this.state.markers] 
    let coords = { lat: event.latLng.lat(), lng: event.latLng.lng() }
    markers.push(coords)
    this.setState({
      markers: markers
    })
    this.props.addMarker(coords)
  }
  
  deleteMarker = (index) => {
    let markers = [...this.state.markers]
    this.props.deleteMarker(this.props.map._id, markers[index]);
    markers.splice(index, 1);
    this.setState({
      markers: markers
    })

  }
  onCloseClick = () => {
    this.props.closeInfoAboutCurrentLocation(false);
  }
  onMapDrag=()=> {
    this.setState({showLocation: false, locationMarker: true})
  }
  render() {
    console.log(this.state)
    let image = require('../../../../images/beachflag.png');
    let locationImg = require('../../../../images/currentLocation.png');
    //let defaultCenter =  {lat: 50.4501, lng: 30.523400000000038}
    let currentLocation = {lat: this.props.coords.latitude, lng: this.props.coords.longitude}
    return (
      <GoogleMap
        ref='map'
        defaultZoom={13}
        center={this.state.center}
        onClick={this.handleMapClick}
        onBoundsChanged={this.onBoundsChanged}
        onDrag={this.onMapDrag}
      >
        { this.state.showLocation && <InfoWindow position={currentLocation} onCloseClick={this.onCloseClick}>
            <div>
              Location found
            </div>
          </InfoWindow>
        }
        { this.state.locationMarker && <Marker position={currentLocation} icon={locationImg} image/>}
        {this.props.showMarkers && this.state.markers.map((marker, i)=> {
          return <Marker position={marker} key={i} icon={image} image onClick={(event, marker)=>this.deleteMarker(i)}/>
        })}
        <SearchBox
          ref='searchBox'
          bounds={this.state.bounds}
          controlPosition={google.maps.ControlPosition.TOP_LEFT}
          onPlacesChanged={this.onPlacesChanged}
        >
          <input type="text" />
        </SearchBox>
          <select
            type="text"
            placeholder="Customized"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `200px`,
              height: `32px`,
              marginTop: `65px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
            }}
            onChange={(event)=>this.setState({select:event.target.value})}
          >
            <option>pharmacies</option>
            <option>gas stations</option>
            <option>schools</option>
            <option>restaurants</option>
          </select>
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