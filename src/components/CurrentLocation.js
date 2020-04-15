import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';

const CurrentLocation = () => {
  const [ dateTime, setDateTime ] = useState(new Date());
  const [ coords, setCoords ] = useState("");

  useEffect(() => {
    async function getData() {
      const url = "https://caddienow-iss.herokuapp.com/iss-now";
      const res = await fetch(url);
      res
        .json()
        .then(res => {
          let dateTime = new Date(res.timestamp * 1000);
          setDateTime(dateTime);
          setCoords(res.iss_position);
        });
    }
    
    getData();
  }, []);

  return (
    <div className="current-location">
      <h1>The ISS is currently above..</h1>
      <Card className="text-center" bg='transparent' text='light' border='light'>
        <Card.Body>
          <Card.Title>Coordinate Location</Card.Title>
          <Card.Text>Latitude: { coords.latitude }, Longitude: { coords.longitude }</Card.Text>
          <Card.Text>{ dateTime.toString() }</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
 
export default CurrentLocation;