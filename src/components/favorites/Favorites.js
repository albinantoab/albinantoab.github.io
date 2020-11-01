import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from "react-redux";

import { makeChunks } from '../../helpers/commonHelper';
import ListCard from '../listCard/ListCard';
import NoData from '../noData/NoData';
import './Favorites.css'

const Favorites = () => {
  const data = useSelector(state => state.list.favorites);

  if (data.length === 0) {
    return (
      <NoData />
    );
  } else {
    let chunkData = makeChunks(data, 4);
    return (
      <Container className="fav-main-container">
        {
          chunkData.map((chunk, index) => {
            return (
              <Row key={index.toString()}>
                {
                  chunk.map((item, i) => {
                    return (
                      <Col key={i.toString()} xs={12} sm={12} md={3}>
                        <ListCard data={item} />
                      </Col>
                    );
                  })
                }
              </Row>
            );
          })
        }
      </Container>
    );
  }

};

export default Favorites