import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as userApi from './userApi';


function* getCurrentUser(action) {
    try {
        const user = yield call(userApi.getCurrentUser);
        yield put({type: "GET_CURRENT_USER_SUCCEEDED", user: user});
    } catch (e) {
        console.log(e);
        yield put({type: "GET_CURRENT_USER_FAILED", message: e.message});
    }
}

function* userProfileSaga() {
    yield takeEvery("GET_CURRENT_USER_REQUESTED", getCurrentUser);
}

export default userProfileSaga;