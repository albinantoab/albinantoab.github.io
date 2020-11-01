import React from 'react';
import { Link } from 'react-router-dom';
import { connect, useSelector } from "react-redux";
import { Heart, HeartFill } from 'react-bootstrap-icons';

import './ListCard.css';
import { setFavorite } from '../../store/actions/ListingActions';
import { searchInArrayObj } from '../../helpers/commonHelper';

const ListCard = (props) => {
  const { data } = props;
  const favorites = useSelector(state => state.list.favorites);

  if(!data) {
    return '';
  }

  const {
    Title,
    Year,
    Type,
    Poster,
    imdbID,
  } = data;

  const existInObj = searchInArrayObj('imdbID', imdbID, favorites);

  return(
    <Link to={ "/details/" + imdbID }>
      <div className="ls-card-main-container" style={{ backgroundImage: "url(" + Poster + ")" }}>
        <div className="ls-card-type">{ Type }</div>
        <div className="ls-card-year">{ Year }</div>
        <div className="ls-card-title">{ Title }</div>
        {
          existInObj === -1
            ? ( <Heart className="ls-fav-icon" onClick={ (event) => { event.preventDefault(); props.setFavorite(favorites, data, 'add') } } /> )
            : ( <HeartFill className="ls-fav-icon" onClick={ (event) => { event.preventDefault(); props.setFavorite(favorites, data, 'remove') } } /> )
        }
        <div className="ls-shade"></div>
      </div>
    </Link>
  );
}

export default connect(
  null,
  { setFavorite },
)(ListCard);