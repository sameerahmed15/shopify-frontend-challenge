import React from 'react'
import { Component } from 'react'
import "./styles.css";

import 'bootstrap/dist/css/bootstrap.css'
import { Form, Button, Card, Container } from 'react-bootstrap'

const ResultCard = (props) => {
    return (
        <div>
            <Card className='results-card mb-5'>
                <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">{props.name}</Card.Subtitle>
                    <Card.Text>{props.response}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ResultCard