import axios from 'axios';

const url = 'http://localhost:2020/api';
const urlNoApi = 'http://localhost:2020';

const createInitialMap = (map) => {
     return fetch(urlNoApi + '/mapInitial', {
        method: 'POST',
        body: ({})
        })
        .then((response) => response.json())
        .catch((error) => error.data);
}

const getMap = () =>
    axios.get(url + '/map/')
        .then((response) => response.data)
        .catch((error) => error.data);

const getMarkers = () =>
    axios.get(url + '/map/')
        .then((response) => response.data)
        .catch((error) => error.data);

const addUserMarkers = (markers) =>
    axios.post(url + '/map/markers', markers)
        .then((response) => response.data)
        .catch((error) => error.data);

const deleteMarker = (_id) =>
    axios.delete(url + '/map/markers/' + _id)
        .then((response) => response.data)
        .catch((error) => error.data);

export {
    getMarkers,
    createInitialMap,
    addUserMarkers,
    deleteMarker
};