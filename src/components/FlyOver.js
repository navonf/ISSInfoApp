import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FlyOver = () => {
  const [ lat, setLat ] = useState("");
  const [ lng, setLng ] = useState("");
  const [ alt, setAlt ] = useState("");
  const [ n, setN ] = useState("");
  const getLocation = () => {
    const pos = new Promise(res => 
      navigator.geolocation.getCurrentPosition(res))
      .then((res) => {
        setLat(res.coords.latitude)
        setLng(res.coords.longitude)
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  }
  return (
    <div className="fly-over">
      <h1>The ISS will fly over..</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Button variant="info" block onClick={getLocation}>Use My Location</Button> <br />
          <Form.Control size="lg" type="text" placeholder="Latitude: -80° .. 80°" value={lat}
            onChange={(e) => setLat(e.target.value)} /> <br />
          <Form.Control size="lg" type="text" placeholder="Longitude: -180° .. 180°" value={lng}
            onChange={(e) => setLng(e.target.value)} /> <br />
          <Form.Control size="lg" type="text" placeholder="Altitude: 0 .. 10,000 meters" value={alt}
            onChange={(e) => setAlt(e.target.value)} /> <br />
          <Form.Control size="lg" type="text" placeholder="How Many Times? 1 .. 100"  value={n}
            onChange={(e) => setN(e.target.value)} /> <br />
          <Button variant="info" block type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}
 
export default FlyOver;