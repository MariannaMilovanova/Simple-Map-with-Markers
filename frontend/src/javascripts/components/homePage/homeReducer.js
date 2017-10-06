let initialState = {
    map:null,
    showLocation: true,
    currentLocataion: {},
    center: null,
    markers:[]
}
const homePageStore = (state = initialState, action) => {

     switch (action.type) {
        case 'GET_MAP_SUCCEEDED' :
            return {...state, ...{map: action.map}}
        case 'CREATE_INITIAL_MAP_SUCCEEDED':
            return {...state, ...{map: action.map}}
        case 'SHOW_CURRENT_LOCATION':
            return {...state, ...{showLocation: action.showLocation, center: action.center}}
         case 'CLOSE_INFO_ABOUT_CURRENT_LOCATION':
            return {...state, ...{showLocation: action.showLocation}}
         case 'GET_CURRENT_LOCATION':
            return {...state, ...{currentLocataion: action.coords}}
        case 'ADD_NEW_MARKER':
            return {...state, markers: state.markers.concat(action.coords)};
        case 'DELETE_MARKER':
            return {...state, ...{markers: state.markers.filter(marker => marker.lat !== action.coords.lat && marker.lng !== action.coords.lng)}}
        case 'SAVE_ALL_MARKERS':
            return {...state}
        case 'GET_AND_SHOW_ALL_MARKERS':
            return {...state}
            
        default:
            return state
    }
}

export default homePageStore