import React, { Component } from 'react';
import MapContainer from './mapContainer'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { API_KEY_GM_JS } from '../../configuration/apiKeys';
import MapComponent from './mapComponent';
import currentLocation from '../../../../images/location.png';
import './simpleMap.scss';

export default class SimpleMap extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isMarkerShown: false
      }
    }

  componentWillMount() {
    this.props.getMap();
  }

 /* delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }*/

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
   /* this.delayedShowMarker()*/
  }

  render() {
    return (
      <MapComponent coords={this.props.coords}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        onContextMenu={this.handleMapClick}
        showLocation={this.props.showLocation}
        closeInfoAboutCurrentLocation={this.props.closeInfoAboutCurrentLocation}
        getCurrentLocation={this.props.getCurrentLocation}
        center={this.props.center}
        addMarker={this.props.addMarker}
        deleteMarker={this.props.deleteMarker}
        mapId={this.props.mapId}
      />
    )
  }
}