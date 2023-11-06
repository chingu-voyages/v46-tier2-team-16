import axios from 'axios';

const TASTY_RAPID_API_URL = import.meta.env.VITE_TASTY_RAPID_API_URL;
const TASTY_RAPID_API_KEY = import.meta.env.VITE_TASTY_RAPID_API_KEY;
const TASTY_RAPID_API_HOST = import.meta.env.VITE_TASTY_RAPID_API_HOST;
const TASTY_RAPID_API_URL_SIMILARITIES = import.meta.env.VITE_TASTY_RAPID_API_URL_SIMILARITIES;

const options = {
    method: 'GET',
    url: TASTY_RAPID_API_URL,
    params: {
        from: '0',
        size: '20',
        tags: 'under_30_minutes',
    },
    headers: {
        'X-RapidAPI-Key': TASTY_RAPID_API_KEY,
        'X-RapidAPI-Host': TASTY_RAPID_API_HOST,
    },
};

const fetchAll = async () => {
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const fetchOne = async (id) => {
    try {
        const response = await axios.request(options);
        return response.data.results.find((recipe) => recipe.id === id);
    } catch (error) {
        console.log(error);
    }
};

const fetchRelated = async (id) => {
    console.log('id apicall', id);
    const optionsSimilarities = {
        method: 'GET',
        url: TASTY_RAPID_API_URL_SIMILARITIES,
        params: { recipe_id: id },
        headers: {
            'X-RapidAPI-Key': TASTY_RAPID_API_KEY,
            'X-RapidAPI-Host': TASTY_RAPID_API_HOST,
        },
    };

    try {
        const response = await axios.request(optionsSimilarities);
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
};

export { fetchAll, fetchOne, fetchRelated };
