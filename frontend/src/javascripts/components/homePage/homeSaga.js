import { call, put, takeEvery} from 'redux-saga/effects';
import { getMarkers, addUserMarkers, deleteMarker, getMap, getPlaces } from './homeApi';

function* getMyMap(action) {
    try {
        const maps = yield call(getMap);
        yield put({type: "GET_MAP_SUCCEEDED", map: maps[0]});
    } catch (e) {
        console.log(e);
        yield put({type: "GET_MAP_FAILED", message: e.message});
    }
}

function* saveUserMarkers(action) {
    try {
        let payload = {};
        payload.id = action.mapId;
        payload.markers =action.markers;
        const map = yield call(addUserMarkers, payload);
        yield put({type: "SAVE_ALL_MARKERS_SUCCEEDED", map: map});
    } catch (e) {
        console.log(e);
        yield put({type: "SAVE_ALL_MARKERS_FAILED", message: e.message});
    }
}


function* homePageSaga() {
    yield takeEvery('GET_MAP', getMyMap);
    yield takeEvery('SAVE_ALL_MARKERS', saveUserMarkers);
}

export default homePageSaga;