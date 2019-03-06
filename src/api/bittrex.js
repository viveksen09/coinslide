import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.bittrex.com/api/v1.1/public',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});