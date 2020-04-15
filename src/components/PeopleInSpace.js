import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Astro from './../assets/astronaut.png';

const PeopleInSpace = () => {
  const [ astros, setAstros ] = useState([]);

  useEffect(() => {
    const url = "https://caddienow-iss.herokuapp.com/astros";
    fetch(url)
      .then(res => res.json())
      .then(res => setAstros(res.people));
  }, [])
  return (
    <div className="people-in-space">
      <h1>Astronauts on the ISS</h1>
      {
        astros.map((astro, i) => {
          return (
            <div>
            <Card className="text-center" bg='transparent' text='light' border='light'>
              <Card.Body>
                <Card.Text><img alt="astronaut" className="astronaut-img" src={Astro} />
                { astro.name }</Card.Text>
              </Card.Body>
            </Card>
            <br />
            </div>
          )
        })
      }
    </div>
  );
}
 
export default PeopleInSpace;