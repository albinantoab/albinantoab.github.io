import React, { useEffect } from 'react';
import { connect, useSelector } from "react-redux";

import { fetchDetails } from '../../store/actions/DetailsActions';
import Loader from '../loader/Loader';
import './Details.css'
import NoData from '../noData/NoData';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { searchInArrayObj } from '../../helpers/commonHelper';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import { setFavorite } from '../../store/actions/ListingActions';

const Details = (props) => {
  const data = useSelector(state => state.details.data);
  const showDetailsLoader = useSelector(state => state.list.showDetailsLoader);
  const imdbID = props.match.params.id;
  const favorites = useSelector(state => state.list.favorites);
  const existInObj = searchInArrayObj('imdbID', imdbID, favorites);

  useEffect(() => {
    props.fetchDetails(imdbID);
  }, []);

  if(showDetailsLoader) {
    return (<Loader />);
  }

  if(!data || data.Response !== 'True') {
    return(<NoData />);
  }

  const {
    Title,
    Type,
    Writer,
    Director,
    imdbRating,
    imdbVotes,
    Runtime,
    Released,
    Production,
    Poster,
    Plot,
    Language,
    Genre,
    Country,
    Awards,
    Actors,
    Year,
  } = data;

  const favData = {
    Poster,
    Title,
    Type,
    Year,
    imdbID,
  }

  return(
    <Container className="details-container">
      <Card bg="dark">
        <Card.Img variant="top" src={Poster} alt="poster" />
        <Card.Body>
          <div className="movie-name">
            {Title}
            {
              existInObj === -1
                ? ( <Heart className="details-fav-icon" onClick={ () => props.setFavorite(favorites, favData, 'add') } /> )
                : ( <HeartFill className="details-fav-icon" onClick={ () => props.setFavorite(favorites, favData, 'remove') } /> )
            }
          </div>
          <div className="movie-details">
            <Row>
              <Col>
                {Plot}
              </Col>
              <Col>
                <div className="details-data">
                  <span className="data-label">Cast: </span>
                  <span className="data-value"> { Actors } </span>
                </div>
                <div className="details-data">
                  <span className="data-label">Type: </span>
                  <span className="data-value"> { Type } </span>
                </div>
                <div className="details-data">
                  <span className="data-label">Genre: </span>
                  <span className="data-value"> { Genre } </span>
                </div>
                <div className="details-data">
                  <span className="data-label">IMdB Rating: </span>
                  <span className="data-value"> { imdbRating } </span>
                </div>
                <div className="details-data">
                  <span className="data-label">IMdB Voting: </span>
                  <span className="data-value"> { imdbVotes } </span>
                </div>
                <div className="details-data">
                  <span className="data-label">Release Date: </span>
                  <span className="data-value"> { Released } </span>
                </div>
                <div className="details-data">
                  <span className="data-label">Writer: </span>
                  <span className="data-value"> { Writer } </span>
                </div>
                <div className="details-data">
                  <span className="data-label">Director: </span>
                  <span className="data-value"> { Director } </span>
                </div>
                <div className="details-data">
                  <span className="data-label">Runtime: </span>
                  <span className="data-value"> { Runtime } </span>
                </div>
                <div className="details-data">
                  <span className="data-label">Production: </span>
                  <span className="data-value"> { Production } </span>
                </div>
                <div className="details-data">
                  <span className="data-label">Language: </span>
                  <span className="data-value"> { Language } </span>
                </div>
                <div className="details-data">
                  <span className="data-label">Country: </span>
                  <span className="data-value"> { Country } </span>
                </div>
                <div className="details-data">
                  <span className="data-label">Awards: </span>
                  <span className="data-value"> { Awards } </span>
                </div>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default connect(
  null,
  {
    fetchDetails,
    setFavorite
  }
)(Details);
