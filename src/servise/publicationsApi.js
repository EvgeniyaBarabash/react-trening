import axios from 'axios';

axios.defaults.baseURL = 'https://61bf061fb25c3a00173f4c43.mockapi.io';

export async function getPublications() {
    const response = await axios.get('/contacts/contacts');
    return response.data
};


export const getPublicationById = async id => {
    const response = await axios.get(`/contacts/contacts/${id}`);
    return response.data;
};

export const deletePublicationById = async id => {
    const response = await axios.delete(`/contacts/contacts/${id}`);
    return response.data;
};

export const addPublication = async data => {
    const response = await axios.post(`/contacts/contacts/`, data);
    return response.data;
};