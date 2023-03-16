import axios from 'axios';

export default axios.create({
    baseURL:'https://notsteam.games', 
    headers: {"ngrok-skip-browser-warning": "true"}
})