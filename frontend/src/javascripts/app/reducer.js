import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import signUp from '../components/auth/signUp/signUpReducer';
import login from '../components/auth/login/loginReducer';
import userProfile from '../components/userProfile/userProfileReducer';
import homePageStore from '../components/homePage/homeReducer'

export default combineReducers({
    routing,
    signUp,
    login,
    userProfile,
    homePageStore
});