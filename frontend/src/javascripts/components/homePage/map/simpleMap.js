import React, { Component } from 'react';
import MapContainer from './mapContainer';
import MapButtons from './mapButtons';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { API_KEY_GM_JS } from '../../configuration/apiKeys';
import MapComponent from './mapComponent';
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
      <div className='map-wrapper'>
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
          map={this.props.map}
          showMarkers={this.props.showMarkers}
        />
        <MapButtons goToCurrentLocation={this.props.goToCurrentLocation}
          currentLocation={this.props.currentLocation}
          saveAllMarker={this.props.saveAllMarker}
          showAllMarker={this.props.showAllMarker}
          markers={this.props.markers}
          mapId={this.props.mapId}
        />
      </div>
    )
  }
}