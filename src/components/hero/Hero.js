import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Hero = ({games}) => {
    const navigate = useNavigate();

    function reviews(gameId) {
        navigate(`/api/v1/reviews/${gameId}`);
    }

  return (
    <div className='game-carousel-container'>
      <Carousel>
        {
            games?.map((game) => {
                return (
                    <Paper key={games.gameId}>
                        <div className='game-card-container'>
                            <div className="game-card" style={{"--img": `url(${game.backdrops[0]})`}}>
                                <div className="game-detail">
                                    <div className="game-poster">
                                        <img src={game.poster} alt="" />
                                    </div>
                                    <div className="game-title">
                                        <h4>{game.title}</h4>
                                    </div>
                                    <div className="game-buttons-container">
                                    <Link to={`/Trailer/${game.trailerLink.substring(game.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>  
                                        <div className="game-review-button-container">
                                            <Button className="game-header-button" onClick={() => reviews(game.gameId)} >Leave A Review</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })
        }
      </Carousel>
    </div>
  )
}

export default Hero
