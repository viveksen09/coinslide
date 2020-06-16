import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});