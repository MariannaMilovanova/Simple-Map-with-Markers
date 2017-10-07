import React from 'react';
import Header from './header';
import MapContainer from './map/mapContainer';
import MapButtons from './mapButtons'
import './home.scss';

class HomeContainer extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className = "home-page-wrapper">
        <Header />
        <div className = 'home-page-body'>
          <div className='home-page-body-header'>This is a Simple Map</div>
          <div className='map-wrapper'>
            <MapContainer showLocation={this.props.showLocation}
                          closeInfoAboutCurrentLocation={this.props.closeInfoAboutCurrentLocation}
                          getCurrentLocation={this.props.getCurrentLocation}
                          currentLocation={this.props.currentLocation}
                          center={this.props.center}
                          addMarker={this.props.addMarker}
                          deleteMarker={this.props.deleteMarker}
                          map={this.props.map}
                          getMap={this.props.getMap}
                          showMarkers={this.props.showMarkers}
                          getPlaces={this.props.getPlaces}
                          />
            <MapButtons goToCurrentLocation={this.props.goToCurrentLocation}
                        currentLocation={this.props.currentLocation}
                        saveAllMarker={this.props.saveAllMarker}
                        showAllMarker={this.props.showAllMarker}
                        markers={this.props.markers}
                        mapId={this.props.mapId}
                        />
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContainer