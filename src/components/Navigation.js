import React from 'react';

import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from '../media/logo.svg'
import data from '../data/data.json'
import Select from 'react-select'

const Navigation = (props) => {

    //obtaining the list of the avaiable sensors
    const options = []
    for(var sensor in data) {
        options.push(
            {
                value: data[sensor].name.common,
                label: data[sensor].name.common
            }
        )
    }

    //handle change of state selecting a new sensor
    const handleSensorChange = e => {
        props.setSensor(e.value);
    }
     

    return (
        <div>
            <Navbar bg="transparent" expand="lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand href="#home">
                            <img src={logo} alt="logo" style={{width:'100px',paddingTop:'20px'}}/>
                            <span style={{paddingLeft:'20px'}}>Spectrum Analyzer</span>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link style={{width: '200px', marginTop:'-6px'}}>
                                <Select
                                    placeholder="Select Option"
                                    value={options.find(obj => obj.value === props.sensor)}
                                    options={options} 
                                    onChange={handleSensorChange} 
                                />
                            </Nav.Link>
                            <Link to="/project">
                                <Nav.Link href="#def">The Project</Nav.Link>
                            </Link>
                            <Link to="/apply">
                                <Nav.Link href="#def">Apply</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;