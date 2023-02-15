import {useEffect, useRef, useState} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col, Button} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import Header from '../header/Header';
import App from '../../App';

import React from 'react'


const Reviews = ({ userPhoto, user, getGameData, game, reviews, setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const gameId = params.gameId;

    const userName = "Foli Creppy";

    useEffect(()=>{
        getGameData(gameId);
    },[])

    const addReview = async (e) =>{
        e.preventDefault();

        const rev = revText.current;

        try
        {
            const response = await api.post("/api/v1/reviews",{reviewBody:rev.value,gameId:gameId});

            const updatedReviews = [...reviews, {body:rev.value}];    
    
            setReviews(updatedReviews);
            rev.value = "";

        }
        catch(err)
        {
            console.error(err);
        }
        



    }

  return (
    <Container>
        <Row>
            <Col><h3>Love {game?.title}?</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img className="game-poster" src={game?.poster} alt="" />
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <div>
                                <img className="game-card" src={user?.picture}/>
                                <h3>{user?.name}username,</h3>
                            </div>
                        </Row>
                        <Row style={{ marginBottom: 5 }}>
                            <div>
                                <p></p>
                            </div>
                        </Row>
                        <Row>
                            <Col>
                                <ReviewForm 
                                    handleSubmit={addReview} 
                                    revText={revText} 
                                    labelText = "Tell us all about it!" />  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r) => {
                        return(
                            <>
                                <Row>
                                    <Col>
                                        {r.body}
                                    </Col>
                                    <Col>
                                        <Button className='game-header-button'>Edit</Button>
                                        <Button className='game-header-button'>Delete</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>                                
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default Reviews