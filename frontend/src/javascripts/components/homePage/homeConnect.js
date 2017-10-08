import HomeContainer from './homeContainer';
import { connect } from 'react-redux';
import { getMap, getPlaces, goToCurrentLocation, getCurrentLocation, closeInfoAboutCurrentLocation, addMarker, deleteMarker, saveAllMarker, showAllMarker } from './homeActions';

const mapStateToProps = (state) => {
  return ({
    showLocation: state.homePageStore.showLocation,
    currentLocation: state.homePageStore.currentLocataion,
    center: state.homePageStore.center,
    markers: state.homePageStore.markers,
    map: state.homePageStore.map ? state.homePageStore.map : null,
    mapId: state.homePageStore.map ? state.homePageStore.map._id : null,
    showMarkers: state.homePageStore.showMarkers
  });
}

const mapDispatchToProps = {
   getMap: getMap,
   goToCurrentLocation: goToCurrentLocation,
   closeInfoAboutCurrentLocation: closeInfoAboutCurrentLocation,
   getCurrentLocation: getCurrentLocation,
   addMarker: addMarker,
   deleteMarker: deleteMarker,
   saveAllMarker: saveAllMarker,
   showAllMarker: showAllMarker
 }

const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);

export default HomePage;