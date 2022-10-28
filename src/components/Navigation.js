import React from 'react';

import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';
import logo from '../media/logo.png'
import data from '../data/data.json'
import Select from 'react-select'
import { useHistory } from "react-router-dom";

const Navigation = (props) => {

    //obtaining the list of the avaiable sensors
    const options = []
    for(var sensor in data) {
        options.push(
            {
                value: data[sensor].name+data[sensor].location,
                label: data[sensor].name
            }
        )
    }

    
    



    //handle change of state selecting a new sensor
    const HandleSensorChange = e => {
        props.setSensor(e);

    }
     

    return (
        <div>
            <Navbar bg="transparent" expand="lg">
                <Container>
                    <Link to="/" style={{textDecoration:'none'}}>
                        <Navbar.Brand href="#home">
                            <img src={logo} alt="logo" style={{width:'100px',paddingTop:'20px'}}/>
                            <span style={{paddingLeft:'20px'}}>Spectrum Analyzer</span>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link style={{width: '300px', marginTop:'-6px'}}>
                                <Select
                                    placeholder="Select Option"
                                    value={options.find(obj => obj.value === props.sensor)}
                                    options={options} 
                                    onChange={HandleSensorChange}   
                                                                                                  
                                />
                            </Nav.Link>
                            <Link to="/dashboard" style={{textDecoration:'none'}}>
                                <Nav.Link href="#Dashboard" >Sensors</Nav.Link>
                            </Link>
                            <Link to="/project" style={{textDecoration:'none'}}>
                                <Nav.Link href="#Project" >The Project</Nav.Link>
                            </Link>
                            <Link to="/apply" style={{textDecoration:'none'}}>
                                <Nav.Link href="#Submit">Submit</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;