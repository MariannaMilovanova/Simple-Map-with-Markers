import axios from 'axios';

const url = 'http://localhost:2020/api/map';
const getMap = () =>
    axios.get(url)
        .then((response) => response.data)
        .catch((error) => error.data);

const getMarkers = (id) =>
    axios.get(url + '/' + id)
        .then((response) => response.data)
        .catch((error) => error.data);

const addUserMarkers = (payload) =>
    axios.post(url + '/' + payload.id + '/markers/', payload.markers)
        .then((response) => response.data)
        .catch((error) => error.data);

const deleteMarker = (payload) =>
    axios.delete(url + '/' + payload.mapId + '/markers/' + payload.markerId)
        .then((response) => response.data)
        .catch((error) => error.data);

export {
    getMap,
    getMarkers,
    addUserMarkers,
    deleteMarker
};