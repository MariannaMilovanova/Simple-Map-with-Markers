import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import FaAnchor from "react-icons/lib/fa/anchor";
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"


class MapComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
        markers: []
      }
    }
  componentDidMount(){
    this.props.getCurrentLocation(this.props.coords)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.map && this.props.showLocation == nextProps.showLocation) {
      this.setState({
        markers: nextProps.map.userMarkers
      })
    }
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
  render() {
    let currentLocation={lat: this.props.coords.latitude, lng: this.props.coords.longitude}
    return (
      <GoogleMap
        defaultZoom={13}
        center={this.props.center || currentLocation}
        onClick={this.handleMapClick}
      >
          {this.props.showLocation && <InfoWindow position={currentLocation} onCloseClick={this.onCloseClick}>
            <div>
              Location found
            </div>
          </InfoWindow>
        }
        {this.props.showMarkers && this.state.markers.map((marker, i)=> {
          return <Marker position={marker} key={i} onClick={(event, marker)=>this.deleteMarker(i)}/>
        })}
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