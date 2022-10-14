import React, { useState } from "react";
import { Container, Row, Col, Alert, Card } from "react-bootstrap";
import Navigation from "../components/Navigation";
import database from "../data/data.json"
import Apply from "./Apply"



const Dashboard = (props) => {


  return (
    <div>
      <Navigation sensor={props.sensor} setSensor={props.setSensor} />
      <Container className="d-flex justify-content-center align-items-center mt-4">
        <div>

          <Row>
            
            <p class="text-lg-center">{props.sensor}</p>
            <img src={"/images/" + props.sensor + ".png"} alt="logo" style={{ width: '1000px', paddingTop: '200px' }} />

          </Row>



        </div>
      </Container >
    </div >
  );
}

export default Dashboard