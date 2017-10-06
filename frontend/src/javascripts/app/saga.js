import { all, fork } from 'redux-saga/effects';
import userProfileSaga from '../components/userProfile/userProfileSaga';
import signUpSaga from '../components/auth/signUp/signUpSaga';
import loginSaga from '../components/auth/login/loginSaga';
import logoutSaga from '../components/auth/logout/logoutSaga';
import homePageSaga from '../components/homePage/homeSaga';

export default function* root() {
    yield all([
        fork(signUpSaga),
        fork(loginSaga),
        fork(logoutSaga),
        fork(userProfileSaga),
        fork(homePageSaga)
    ]);
}