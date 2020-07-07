import React, { Component } from 'react';
import heroImage from './hero-image.jpg';
import resume from './EricMcKey_Resume.pdf';
import { MDBBtn } from 'mdbreact';

export default class Intro extends Component {
    render() {
        var heroName = "Hi there! I'm Eric McKey";
        var heroSub = "Computer Programmer";
        return (
            <div>
                <div>
                    <div id="homeScreen">
                        <div className="hero-image">
                            <img src={ heroImage } alt="" />
                               <div className="hero-text">
                                <h1 className="heroName">{ heroName }</h1>
                                <p className="heroSub">{ heroSub }</p>
                                <a href={ resume } download=""><MDBBtn className="btnResume" gradient="blue" size="lg">Resume / CV</MDBBtn></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}