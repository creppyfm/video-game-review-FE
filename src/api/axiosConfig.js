import axios from 'axios';

export default axios.create({
    // baseURL:'http://localhost:8080/api/v1/games',
    baseURL:'https://notsteam.games', 
    headers: {"ngrok-skip-browser-warning": "true"}
})