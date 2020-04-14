import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Satellite from './../assets/satellite.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>International Space Station</h1>
        <img className="satellite-img" src={Satellite} />
        <div className="nav-links">
          <Link to="/CurrentLocation">
            <Button variant="outline-light" size="lg">Current Location</Button>
          </Link>
          <Link to="/FlyOver">
            <Button variant="outline-light" size="lg">Fly Over</Button>
          </Link>
          <Link to="/PeopleInSpace">
            <Button variant="outline-light" size="lg">Who's In Space?</Button>
          </Link>
        </div>
    </div>
  );
}
 
export default Navbar;