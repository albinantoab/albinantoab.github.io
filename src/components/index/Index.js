import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect, useSelector } from "react-redux";
import { makeChunks } from '../../helpers/commonHelper';

import { fetchList } from '../../store/actions/ListingActions';
import Loader from '../loader/Loader';
import ListCard from '../listCard/ListCard';
import './Index.css';
import NoData from '../noData/NoData';

const Index = ({ fetchList }) => {
  const data = useSelector(state => state.list.data);
  const showIndexLoader = useSelector(state => state.list.showIndexLoader);
  const page = useSelector(state => state.list.page);
  const search = useSelector(state => state.list.search);
  const type = useSelector(state => state.list.type);

  useEffect(() => {
    fetchList();
  }, []);
  if(!data || showIndexLoader) {
    return (
      <Loader />
    )
  } else if(data.length === 0) {
    return (
      <NoData />
    );
  } else {
    let chunkData = makeChunks(data, 4);
    return(
      <Container className="index-main-container">
        {
          chunkData.map((chunk, index) => {
            return (
              <Row key={index.toString()}>
                {
                  chunk.map((item, i) => {
                    return (
                      <Col key={i.toString()} xs={12} sm={12} md={3}>
                        <ListCard data = {item} />
                      </Col>
                    );
                  })
                }
              </Row>
            );
          })
        }
        {
          data && data.length / page === 10 &&
          (
            <Row>
              <div className="ls-load-more" onClick={() => fetchList(type, page + 1, search)}>
                Load More
              </div>
            </Row>
          )
        }
      </Container>
    );
  }

}

export default connect(
  null,
  {
    fetchList
  }
)(Index);
