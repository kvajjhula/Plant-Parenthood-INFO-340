import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import { Routes, Route, Link, useNavigate, Redirect } from "react-router-dom";
import { Home } from "./Home.js";
import { Quiz } from "./Quiz.js";
import { PlantCalendar } from "./Calendar.js";
import { PlantList } from "./Explore.js";
import { About } from "./About.js"
import { Question } from './QuestionTemplate.js';
import { QuizResult } from './QuizResult.js'



export default function App(props) {
    // state data for filter
    const [displayedPlants, changeDisplayedPlants] = useState(props.plants);

    function applyFilter(selectedCostLevel) {
        if (selectedCostLevel === "") {
            changeDisplayedPlants(props.plants);
        } else {
            changeDisplayedPlants(props.plants.filter((plant) => {
                if (plant.COST === selectedCostLevel) {
                    return plant;
                }
            }));
        }
    }

    // show modal for calendar popup
    const [show, setShow] = useState(false)

    return (
        <div>
            <>
                <Navbar className="color-Nav" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Plant Parenthood</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {/* <Nav.Link as={Link} to='/Quiz.js'>Quiz</Nav.Link> */}
                                {/* Link for QuestionTemplate */}
                                <Nav.Link as={Link} to='/QuestionTemplate.js'>Quiz</Nav.Link>
                                {/* Link for Quiz Result */}
                                {/* <Nav.Link as={Link} to='/QuizResult.js'>Quiz</Nav.Link> */}
                                <Nav.Link as={Link} to='/Calendar.js'>Calendar</Nav.Link>
                                <Nav.Link as={Link} to='/Explore.js'>Explore</Nav.Link>
                                <Nav.Link as={Link} to='/About.js'>About</Nav.Link>
                            </Nav>  
                                <Button variant="light">Login</Button>
                                <Button variant="light">Sign Up</Button>     
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/Quiz.js" element={<Quiz />} /> */}
                    {/* Route for Question Template */}
                    <Route path="/QuestionTemplate.js" element={<Question />} />
                    {/* Route for Quiz Result */}
                    {/* <Route path="/QuizResult.js" element={<QuizResult />} /> */}
                    <Route path="/Calendar.js" element={<PlantCalendar />} />
                    <Route path="/Explore.js" element={<PlantList applyFilterCallback={applyFilter} plants={displayedPlants} />} />
                    <Route path="/About.js" element={<About />} />
                </Routes>
            </div>
        </div>
    );
}