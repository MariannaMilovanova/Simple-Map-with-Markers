import { call, put, takeEvery} from 'redux-saga/effects';
import { getMarkers, addUserMarkers, deleteMarker, getMap } from './homeApi';

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

function* getUserMarkers(action) {
    try {
        const user = yield call(getUserMarkers);
        yield put({type: "GET_AND_SHOW_ALL_MARKERS_SUCCEEDED", markers: markers});
    } catch (e) {
        console.log(e);
        yield put({type: "GET_AND_SHOW_ALL_MARKERS_FAILED", message: e.message});
    }
}



function* deleteUserMarkers(action) {
    try {
        const user = yield call(deleteMarker, action.marker._id);
        yield put({type: "DELETE_MARKER_SUCCEEDED", markers: markers});
    } catch (e) {
        console.log(e);
        yield put({type: "DELETE_MARKER_FAILED", message: e.message});
    }
}

function* homePageSaga() {
    yield takeEvery('GET_MAP', getMyMap);
    //yield takeEvery('GET_AND_SHOW_ALL_MARKERS', getUserMarkers);
    yield takeEvery('SAVE_ALL_MARKERS', saveUserMarkers);
    //yield takeEvery('DELETE_MARKER', deleteUserMarkers);
}

export default homePageSaga;