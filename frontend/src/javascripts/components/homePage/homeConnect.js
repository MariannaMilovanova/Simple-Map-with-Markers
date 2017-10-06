import HomeContainer from './homeContainer';
import { connect } from 'react-redux';
import { getMap, goToCurrentLocation, getCurrentLocation, closeInfoAboutCurrentLocation, addMarker, deleteMarker, saveAllMarker, getAndShowAllMarker } from './homeActions';

const mapStateToProps = (state) => {
  return ({
    showLocation: state.homePageStore.showLocation,
    currentLocation: state.homePageStore.currentLocataion,
    center: state.homePageStore.center,
    markers: state.homePageStore.markers,
    mapId: state.homePageStore.map ? state.homePageStore.map._id : null
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
   getAndShowAllMarker: getAndShowAllMarker
 }

const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);

export default HomePage;