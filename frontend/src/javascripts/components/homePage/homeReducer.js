let initialState = {
    map:null,
    showLocation: true,
    showMarkers: true,
    currentLocataion: {},
    center: {lat: 50.4501, lng: 30.523400000000038},
    markers: [],
    places: []
}
const homePageStore = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MAP_SUCCEEDED' :
			return {...state, ...{map: action.map, markers: action.map.userMarkers}}
		case 'GET_PLACES_SUCCEEDED' :
			return {...state, ...{places: action.places}}
		case 'SHOW_CURRENT_LOCATION':
			return {...state, ...{showLocation: action.showLocation, center: action.center}}
		case 'CLOSE_INFO_ABOUT_CURRENT_LOCATION':
			return {...state, ...{showLocation: action.showLocation}}
		case 'GET_CURRENT_LOCATION':
			return {...state, ...{currentLocataion: action.coords, center: {lat: action.coords.latitude, lng: action.coords.longitude}}}
		case 'ADD_NEW_MARKER':
			return {...state, markers: state.markers.concat(action.marker)};
		case 'DELETE_MARKER':
			return {...state, ...{markers: state.markers.filter(stateMarker => stateMarker.id !== action.marker.id)}}
		case 'SAVE_ALL_MARKERS_SUCCEEDED':
			return {...state, ...{map: action.map}}
		case 'SHOW_HIDE_ALL_MARKERS':
			return {...state, ...{showMarkers: !state.showMarkers}}
		default:
			return state;
    }
}

export default homePageStore;