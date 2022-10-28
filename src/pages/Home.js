import React from 'react';
import Navigation from '../components/Navigation.js'
import { Container, Alert, Row, Col, Card, Button } from 'react-bootstrap';      //component
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../style/App.css';
import data from '../data/data1.json'
import { useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import unilogo from '../media/uni.svg'
const styles = {
    nameStyle: {
        fontSize: '5em',
    },
    inlineChild: {
        display: 'inline-block',
    },
    mainContainer: {
        marginTop: '5em',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        height: 100,
        width: 100,
    },
    homeTextContainer: {
        marginLeft: 300,
        marginTop: 100,
        marginBottom: 100,
        flexDirection: 'column',
        whiteSpace: 'pre-wrap',
        textAlign: 'left',
        fontSize: '1.5em',
        fontWeight: 500,
    },
    homeImageContainer: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',

    },
    socialContainer: {
        marginTop: 50,
    },
};


const Home = () => {
    return (
        <>
            <Navigation />
            <Container className="d-flex justify-content-center align-items-center ">
                <div>
                    <div style={styles.mainContainer}>
                        <h1 style={styles.nameStyle}>Spectrum Analyzer</h1>
                        <h1 style={styles.nameStyle}>Community</h1>
                        <div className="social-icons" style={styles.socialContainer}>
                            <SocialIcon
                                url="https://github.com/elrich2610/spectrum-analyzer"
                                style={styles.iconStyle}
                            />
                            <SocialIcon
                                url="https://www.disi.unitn.it/it"
                                defaultSVG={unilogo}
                                style={styles.iconStyle}
                            />
                        </div>



                    </div>
                    <Row>
                        <Col style={styles.homeTextContainer}>
                            <p>
                                The Spectrum Analyzer Community is a crowd-sourcing initiative to collect and analyse spectrum data. It uses small radio sensors based on cheap commodity hardware and offers aggregated spectrum information over an open API.

                                The initiative's goal is to sense the entire spectrum in populated regions of the world and to make the data available in real-time for different kinds of stakeholders which require a deeper knowledge of the actual spectrum usage.

                                ElectroSense is an open initiative in which everyone can contribute with spectrum measurements and access the collected data. If you want to take part of this initiative, get involved now by setting up a sensor at your place or contact us to see how our data can help your business.
                            </p>
                        </Col>
                        <Col style={styles.homeImageContainer}>
                            <img src="https://pbs.twimg.com/profile_images/1216991579212328960/_zMGS59y_400x400.png" alt="Logo" width="300" height="300" />
                        </Col>

                    </Row>
                    <Col>
                        <MapContainer center={[43.931014, 11.778697]} zoom={5} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {data.map((item) => (
                                <Marker
                                    key={(item.name)}
                                    position={[item.latitude, item.longitude]}  >
                                </Marker>
                            ))}
                        </MapContainer>

                        <Card style={{ width: '18rem' }}>
                            <Card.Body>

                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" width="250" height="250" class="center" />
                                <Card.Title>Open Source</Card.Title>
                                <Card.Text>
                                    Il progetto è stato sviluppato in modo open source, per questo motivo è possibile accedere al codice sorgente e contribuire allo sviluppo del progetto.
                                    Per maggiori informazioni visitare la pagina GitHub.
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/elrich2610/spectrum-analyzer">GitHub</Button>



                            </Card.Body>
                        </Card>
                    </Col>
                </div>

            </Container>


        </>
    );
};

export default Home;