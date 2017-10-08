let initialState = {
    user: null
};

export default function userProfile(state = initialState, action) {
    switch (action.type) {
    case "GET_CURRENT_USER_SUCCEEDED":
        return Object.assign({}, state, {
            user: action.user
        });
    default:
        return state;
    }
}