import React from 'react'
import { Component } from 'react'
import "./styles.css";

import 'bootstrap/dist/css/bootstrap.css'
import { Form, Button, Card, Container } from 'react-bootstrap'

import ResultCard from './ResultCard'

import { Name } from "./Header";

const API_KEY = process.env.REACT_APP_API_KEY;

console.log(API_KEY)

const { Configuration, OpenAIApi } = require("openai");

class Header extends Component {
    constructor() {
        super()
        this.state = {
            loading: '..... waiting for input',
            data: []
        }
    }


    onFormSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.productName)

        this.setState({
            loading: '..... loading OpenAI response',
        })

        /////OPENAI
        const configuration = new Configuration({
            apiKey: `${API_KEY}`,
        });
        const openai = new OpenAIApi(configuration);

        const response = openai.createCompletion("text-curie-001", {
            prompt: `Write me detailed and informative study notes on the topic ${formDataObj.productName}`,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        .then((response) => {
            this.setState({
                loading: '..... waiting for new input',
                data: [...this.state.data, {heading: `${formDataObj.productName}`, response: `${response.data.choices[0].text}` }]

            })
            console.log(response.data.choices[0].text)
        })

    }
    
    render() {
        return (
            <div>
                <Container className='body-container'>
                    <div className='sidebar-container'>
                        <Form onSubmit = {this.onFormSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Study Topic</Form.Label>
                                <Form.Control type="text" name="productName" placeholder="Enter product name" />
                                <Form.Text className="text-muted">
                                    Write a topic name that you would like to get notes on
                                </Form.Text>
                            </Form.Group>
                            <Button className= "mt-3" variant="primary" type="submit">
                                Get AI Suggestions
                            </Button>
                        </Form>
                    </div>
                    <div className='results-container'>
                        <ResultCard response={this.state.loading}></ResultCard>
                        {this.state.data.map((item) => <ResultCard name = {item.heading} response={item.response}></ResultCard>).reverse()}
                    </div>
                </Container>
            </div>
        )
    }
}

export default Header