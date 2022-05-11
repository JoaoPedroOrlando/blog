import axios from 'axios';

const BASE_URL = 'http://d5b2-200-193-168-13.ngrok.io';

export default axios.create({
    baseURL:BASE_URL
});