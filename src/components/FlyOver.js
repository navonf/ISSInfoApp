import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const FlyOver = () => {
  const [ lat, setLat ] = useState("");
  const [ lng, setLng ] = useState("");
  const [ alt, setAlt ] = useState("");
  const [ n, setN ] = useState("");
  const [ pass, setPass ] = useState([]);
  const getLocation = () => {
    new Promise(res => 
      navigator.geolocation.getCurrentPosition(res))
      .then((res) => {
        setLat(res.coords.latitude)
        setLng(res.coords.longitude)
      })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    let url = "https://caddienow-iss.herokuapp.com/iss-pass?";
    
    // These parameters are required. The form will not submit without them.
    url = url.concat("lat=", lat, "&lon=", lng);

    if(alt !== "" && alt >= 1) {
      url = url.concat("&alt=", alt);
    }

    if(n !== "" && n <= 100) {
      url = url.concat("&n=", n);
    }

    // get the fly over data.
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setPass(res.response);
      });
  }

  const convertUnixToEDT = (timestamp) => {
    const dateTime = new Date(timestamp * 1000)
    return dateTime.toString();
  }

  return (
    <div className="fly-over">
      <h1>The ISS will fly over..</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Button variant="info" block onClick={getLocation}>Use My Location</Button> <br />
          <Form.Control required size="lg" type="text" placeholder="Latitude: -80° .. 80°" value={lat}
            onChange={(e) => setLat(e.target.value)} /> <br />
          <Form.Control required size="lg" type="text" placeholder="Longitude: -180° .. 180°" value={lng}
            onChange={(e) => setLng(e.target.value)} /> <br />
          <Form.Control size="lg" type="text" placeholder="Altitude: 1 .. 10,000 meters" value={alt}
            onChange={(e) => setAlt(e.target.value)} /> <br />
          <Form.Control size="lg" type="text" placeholder="How Many Times? 1 .. 100"  value={n}
            onChange={(e) => setN(e.target.value)} /> <br />
          <Button variant="info" block type="submit">Submit</Button>
        </Form.Group>
      </Form>

      { pass.length > 0 ? 
        <h1>The ISS will fly over { pass.length } 
        { pass.length > 1 ? " times" : " time" }</h1>
        : null
      }

      {
        pass.map( (p, i) => {
          return (
            <div key={i}>
              <Card className="text-center" bg='transparent' text='light' border='light'>
                <Card.Body>
                  <Card.Title>Fly Over { i+1 }</Card.Title>
                  <Card.Text>Seconds To Fly Over: { p.duration }</Card.Text>
                  <Card.Text>At { convertUnixToEDT(p.risetime) }</Card.Text>
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
 
export default FlyOver;