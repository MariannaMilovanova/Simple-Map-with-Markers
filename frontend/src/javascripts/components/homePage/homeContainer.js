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
    console.log(this.props)
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
                          mapId={this.props.mapId}
                          getMap={this.props.getMap}
                          />
            <MapButtons goToCurrentLocation={this.props.goToCurrentLocation}
                        currentLocation={this.props.currentLocation}
                        saveAllMarker={this.props.saveAllMarker}
                        getAndShowAllMarker={this.props.getAndShowAllMarker}
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