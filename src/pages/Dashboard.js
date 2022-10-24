import React, { useState } from "react";
import { Container, Row, Col, Alert, Card } from "react-bootstrap";
import Navigation from "../components/Navigation";
import data from "../data/data.json"
import Submit from "./Submit"




const Dashboard = (props) => {
  
  //var spawn = require("child_process").spawn;
  //var process = spawn('python3',["../../server/loadImages.py",props.sensor.value]);
  fetch('192.168.0.34:8080', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sensor: props.sensor.value })
}
  )
  // console.log(props.sensor)
  return (
    <div>
      <Navigation sensor={props.sensor} setSensor={props.setSensor} />
      <Container className="d-flex justify-content-center align-items-center mt-4">
        <div>

          <Row>

            <p class="text-lg-center">{props.sensor.label}</p>
            <img src={"/images/"+props.sensor.value+'.png'} alt="waterfall" style={{ width: '1000px', paddingTop: '200px' }} />

          </Row>



        </div>
      </Container >
    </div >
  );
}

export default Dashboard