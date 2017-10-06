import axios from 'axios';

const getCurrentUser = () =>
    axios.get('/api/user/me')
        .then((response) => response.data)
        .catch((error) => error.data)

export {
    getCurrentUser
};