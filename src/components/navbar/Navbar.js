import { FormControl, Nav, Navbar, Form, Button, NavDropdown, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { useState } from 'react';
import { fetchList } from '../../store/actions/ListingActions';

const NavBar = ({ fetchList }) => {
  const [ search, setSearch ] = useState('');

  return (
    <Navbar expand="md" collapseOnSelect sticky="top" bg="dark" variant="dark">
      <Navbar.Brand href="/">FilmyApp</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to={ "/favorites"}>
          <Nav.Link href="/favorites">Favorites</Nav.Link>
        </Link>
        <NavDropdown title="Type" id="collasible-nav-dropdown">
          <NavDropdown.Item onClick={() => fetchList('movie', 1, search)} >Movie</NavDropdown.Item>
          <NavDropdown.Item onClick={() => fetchList('series', 1, search)} >Series</NavDropdown.Item>
          <NavDropdown.Item onClick={() => fetchList('episode', 1, search)} >Episode</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={search} onChange={(event) => setSearch(event.currentTarget.value)} />
        <Button variant="outline-info" onClick={() => fetchList('', 1, search)}>Search</Button>
      </Form>
    </Navbar>
  );

}

export default connect(
  null,
  {
    fetchList
  }
)(NavBar);