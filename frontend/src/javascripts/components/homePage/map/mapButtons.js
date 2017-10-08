import React from 'react';
import { Link } from 'react-router';
import { Button, Popup, Header } from 'semantic-ui-react';

const MapButtons = (props) => {
    return (
        <div className ='map-buttons' >
            <Button color='blue'
                    onClick={() => props.goToCurrentLocation(true, {lat: props.currentLocation.latitude, lng: props.currentLocation.longitude})}>
                My Current Location</Button>
            <Popup size="tiny" closeIcon
                trigger={<Button color='orange' onClick={() => props.saveAllMarker(props.mapId, props.markers)}>
                Save All Changes</Button>}
                content='Your data has been successfully saved!'
                on='click'
                hideOnScroll
            />
            <Button color='green' onClick={() => props.showAllMarker()}>
                Show/Hide Markers</Button>
        </div>
    );
};

export default MapButtons;