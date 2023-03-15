import axios from 'axios';

export default axios.create({
    baseURL:'http://ec2-107-20-176-108.compute-1.amazonaws.com:8080/api/v1/games',
    headers: {"ngrok-skip-browser-warning": "true"}
})