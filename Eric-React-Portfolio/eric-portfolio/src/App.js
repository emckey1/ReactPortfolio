import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
    return (
        <div id="colorlib-page">
            <div id="container-wrap">
                <Navbar></Navbar>
                <div id="colorlib-main">
                    <Intro></Intro>
                    <Portfolio></Portfolio>
                    <Contact></Contact>
                </div>
            </div>
        </div>
    )
}

export default App;