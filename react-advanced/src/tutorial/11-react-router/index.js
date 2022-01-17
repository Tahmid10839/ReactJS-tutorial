import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import People from './People'
import Error from './Error'
import Navbar from './Navbar'
import Person from './Person'

const ReactRouter = () => {
    return (
        <Router>
            <h2>React Router Example</h2>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/people" element={<People />} />
                {/* <Route path="*" element={<Navigate to="/" />} /> */}
                <Route path="/person/:id" element={<Person />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}

export default ReactRouter
