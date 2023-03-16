import axios from 'axios';

export default axios.create({
    baseURL:'https://api.notsteam.games', 
    headers: {"ngrok-skip-browser-warning": "true"}
})