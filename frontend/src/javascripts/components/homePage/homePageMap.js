import React, { Component } from 'react';
import HomePageHeader from './homePageHeader';
//import GoogleMapReact from 'google-map-react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { API_KEY_GM_JS } from '../configuration/apiKeys'
import './homePage.scss';

const AnyReactComponent = () => <div>My Text</div>;
const style = {
  width: '600px',
  height: '400px'
}

class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={5} style={style} initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>bla</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY_GM_JS
})(MapContainer)