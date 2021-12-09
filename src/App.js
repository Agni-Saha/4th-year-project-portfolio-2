import React from 'react'
import { Route, Routes } from 'react-router-dom'

import "./App.css"
import "./App.scss"

import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

import Home from './components/Home'

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
    )
}
