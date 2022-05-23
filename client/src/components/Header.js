import React,  {createContext} from 'react'
import { useEffect, useState } from "react";
import { Component } from 'react'
import Example from './Example'

import "./styles.css";
import Logo from './logo.png';

import 'bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Container, NavDropdown, Form } from 'react-bootstrap'

const Name = createContext();

function Header() {
    
        const getInitialState = () => {
            const value = "text-curie-001";
            return value;
          };
        
          const [value, setValue] = useState(getInitialState);
        
          const handleChange = (e) => {
            setValue(e.target.value);
          };
        return (
            <div>
                <Navbar className="navbar" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img alt="logo" className="logo" src= {Logo}></img>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav style ={{marginLeft: "auto"}}>
                                <div class="d-inline-flex">
                                    <div class="mx-2 my-auto">
                                        <label><strong>Engine</strong></label>
                                    </div>
                                    <select value={value} class="form-select" aria-label="Default select example" onChange={handleChange}>
                                        <option selected>text-curie-001</option>
                                        <option>text-davinci-002</option>
                                        <option>text-babbage-001</option>
                                        <option>text-ada-001</option>
                                    </select>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Name.Provider value={value}>
                    <Example/>
                </Name.Provider>
            </div>
        )
    
}

export default Header
export {Name};