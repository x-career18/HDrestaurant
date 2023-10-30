import axios from './customizeAxios.jsx';

const fetchAllLocations = () => {
    return axios.get('/api/v1/locations');
};

const fetchLocationById = (id) => {
    return axios.get(`/api/v1/locations/${id}`);
};

export {
    fetchAllLocations,
    fetchLocationById,
};