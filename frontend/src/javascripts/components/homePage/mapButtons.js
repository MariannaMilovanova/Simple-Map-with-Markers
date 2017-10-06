import React from 'react';
import { Button } from 'semantic-ui-react';

const MapButtons = (props) => {
  return (
    <div className ='map-buttons' >
      <Button color='blue' 
            onClick={()=>props.goToCurrentLocation(true, {lat: props.currentLocation.latitude, lng: props.currentLocation.longitude})}>
            Current Location</Button>
      <Button color='orange' onClick={()=>props.saveAllMarker(props.mapId, props.markers)}>
            Save Markers</Button>
      <Button color='green'>
            Show My Markers</Button>
    </div>
  )
}

export default MapButtons