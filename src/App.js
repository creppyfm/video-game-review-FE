import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';

function App() {

  const [ user, setUser ] = useState({});

  function handleCallbackResponse (response) {
    console.log("JWT ID: " + response.credential)
    let userObj = jwtDecode(response.credential);
    console.log(userObj);
    setUser(userObj);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;

  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "911289990493-rf1kslb8qrb23q5bfqjed8s48pr29266.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "small" }
    );

  }, []);

  const [games, setGames] = useState();
  const [game, setGame] = useState();
  const [reviews, setReviews] = useState([]);

  const getGames = async () => {

    try {
      const response  = await api.get("/api/v1/games");
      setGames(response.data);

    } catch (e) {
      console.log(e);
    }
  }

  const getGameData = async (gameId) => {
     
    try {
        const response = await api.get(`/api/v1/games/${gameId}`);
        const singleGame = response.data;
        setGame(singleGame);
        setReviews(singleGame.reviewIds);
        // above ^^ just edited reviews to reviewIds
    } 
    catch (e) 
    {
      console.error(e);
    }

  }

  useEffect(() => {
    getGames();
  }, [])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home game={games} />}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
          <Route path="/api/v1/reviews/:gameId" element ={<Reviews getGameData = {getGameData} game={game} reviews={reviews} setReviews={setReviews}/>}></Route>
                  {/* //   { user &&
                  //     <div>
                  //         <img src={user?.picture}></img>
                  //         <h3>{user?.name}</h3>
                  //     </div>
                  // } */}
  
          <Route path="*" element = {<NotFound/>}></Route>          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
