import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import './index.css';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2> Algunos post sobre python, linux y la vida como dev</h2>
                </Jumbotron>
                <Row className='show-grid text-center'>
                    <Col xs={12} sm={4} className="blog-wrapper">
                        <Image src='' />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Home;