import React from 'react';
import {geolocated} from 'react-geolocated';
import SimpleMap from './simpleMap'

class MapContainer extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable
          ? <div>
              <div className='map-wrapper'>
                <div className='noSupportGeolocation'>Your browser does not support Geolocation</div>
                <SimpleMap  
                           showLocation={this.props.showLocation}
                           closeInfoAboutCurrentLocation={this.props.closeInfoAboutCurrentLocation}
                           center={this.props.center}
                           addMarker={this.props.addMarker}
                           deleteMarker={this.props.deleteMarker}
                           currentLocation={this.props.currentLocation}
                           map={this.props.map}
                           getMap={this.props.getMap}
                           showMarkers={this.props.showMarkers}
                           goToCurrentLocation={this.props.goToCurrentLocation}
                           saveAllMarker={this.props.saveAllMarker}
                           showAllMarker={this.props.showAllMarker}
                           markers={this.props.markers}
                           mapId={this.props.mapId}
                        />
                </div>
              </div>
          : !this.props.isGeolocationEnabled

            ? <div>
                <div className='map-wrapper'>
                  <div className='noSupportGeolocation'>Geolocation is not enabled</div>
                  <SimpleMap  
                             showLocation={this.props.showLocation}
                             closeInfoAboutCurrentLocation={this.props.closeInfoAboutCurrentLocation}
                             center={this.props.center}
                             addMarker={this.props.addMarker}
                             deleteMarker={this.props.deleteMarker}
                             currentLocation={this.props.currentLocation}
                             map={this.props.map}
                             getMap={this.props.getMap}
                             showMarkers={this.props.showMarkers}
                             goToCurrentLocation={this.props.goToCurrentLocation}
                             saveAllMarker={this.props.saveAllMarker}
                             showAllMarker={this.props.showAllMarker}
                             markers={this.props.markers}
                             mapId={this.props.mapId}
                          />
                  </div>
              </div>
            : this.props.coords
              ?  <div className='map-wrapper'>
                    <SimpleMap coords={this.props.coords} 
                               showLocation={this.props.showLocation}
                               closeInfoAboutCurrentLocation={this.props.closeInfoAboutCurrentLocation}
                               getCurrentLocation={this.props.getCurrentLocation}
                               center={this.props.center}
                               addMarker={this.props.addMarker}
                               deleteMarker={this.props.deleteMarker}
                               currentLocation={this.props.currentLocation}
                               map={this.props.map}
                               getMap={this.props.getMap}
                               showMarkers={this.props.showMarkers}
                               goToCurrentLocation={this.props.goToCurrentLocation}
                               saveAllMarker={this.props.saveAllMarker}
                               showAllMarker={this.props.showAllMarker}
                               markers={this.props.markers}
                               mapId={this.props.mapId}
                            />
                </div>
          : <div>Getting the location data&hellip; </div>;
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(MapContainer);


// !this.props.isGeolocationAvailable
//       ? <div>Your browser does not support Geolocation</div>
//       : !this.props.isGeolocationEnabled
//         ? <div>Geolocation is not enabled</div>
//         : this.props.coords
//           ? <table>
//             <tbody>
//               <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
//               <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
//               <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
//               <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
//               <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
//             </tbody>
//           </table>
//           : <div>Getting the location data&hellip; </div>;