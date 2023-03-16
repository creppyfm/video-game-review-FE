import axios from 'axios';

export default axios.create({
    baseURL:'https://notsteam.mattmcshane.com', 
    headers: {"ngrok-skip-browser-warning": "true"}
})