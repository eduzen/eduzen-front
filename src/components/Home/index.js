import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import './index.css';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2> HOLA MUNDO</h2>
                </Jumbotron>
                <Link to="/about"><Button bsStyle="primary">About</Button></Link>
                <Link to="/contact"/>
            </Grid>
        )
    }
}

export default Home;