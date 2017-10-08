import React from 'react';
import { Button } from 'semantic-ui-react';

const MapButtons = (props) => {
    return (
        <div className ='map-buttons' >
            <Button color='blue'
                    onClick={() => props.goToCurrentLocation(true, {lat: props.currentLocation.latitude, lng: props.currentLocation.longitude})}>
                My Current Location</Button>
            <Button color='orange' onClick={() => props.saveAllMarker(props.mapId, props.markers)}>
                Save All Changes</Button>
            <Button color='green' onClick={() => props.showAllMarker()}>
                Show/Hide Markers</Button>
        </div>
    );
};

export default MapButtons;