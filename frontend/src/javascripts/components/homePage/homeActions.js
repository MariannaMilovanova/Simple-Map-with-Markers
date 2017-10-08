export const goToCurrentLocation = (showLocation, center) => {
    return {
        type: 'SHOW_CURRENT_LOCATION',
        showLocation: showLocation,
        center: center
    };
};

export const getMap = () => {
    return {
        type: 'GET_MAP'
    };
};

export const closeInfoAboutCurrentLocation = (showLocation) => {
    return {
        type: 'CLOSE_INFO_ABOUT_CURRENT_LOCATION',
        showLocation: showLocation
    };
};

export const getCurrentLocation = (coords) => {
    return {
        type: 'GET_CURRENT_LOCATION',
        coords: coords
    };
};

export const addMarker = (marker) => {
    return {
        type: 'ADD_NEW_MARKER',
        marker
    };
};

export const deleteMarker = (marker) => {
    return {
        type: 'DELETE_MARKER',
        marker
    };
};

export const saveAllMarker = (mapId, markers) => {
    return {
        type: 'SAVE_ALL_MARKERS',
        mapId,
        markers
    };
};

export const showAllMarker = () => {
    return {
        type: 'SHOW_HIDE_ALL_MARKERS'
    };
};