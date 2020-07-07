import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import $ from 'jquery';
import { MDBIcon } from "mdbreact";
import { Link, animateScroll as scroll } from 'react-scroll';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.lsHomeClick = this.lsHomeClick.bind(this);
        this.lsPortfolioClick = this.lsPortfolioClick.bind(this);
        this.lsContactClick = this.lsContactClick.bind(this);
    }
    lsHomeClick() {
        scroll.scrollToTop();
        console.log("Should work");
    }
    lsPortfolioClick() {
        window.location = "#portfolioScreen";
    }
    lsContactClick() {
        window.location = "#contactScreen";
    }
    render() {
        var email = "ericmckey22@hotmail.com";
        return (
            <div>
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="personal-img" style={{backgroundImage: 'url(/profile.jpg)'}} />
                            <h1 id="colorlib-logo"><a href="index.html">Eric McKey</a></h1>
                            <span className="email"><i className="icon-mail"></i>{ email }</span>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <ListGroup className="siteAreaLink" variant="flush" defaultActiveKey="#home">
                                <ListGroup.Item className="list-group-item" onClick={this.lsHomeClick}>Home</ListGroup.Item>
                                <ListGroup.Item className="list-group-item"><Link to="portfolioScreen" smooth={true} duration={1000}>Portfolio</Link></ListGroup.Item>
                                <ListGroup.Item className="list-group-item" onClick={this.lsContactClick}>Contact</ListGroup.Item>
                            </ListGroup>
                        </nav>
                        <div id="socialLinks">
                            <ul className="fa-ul">
                                <li><a href="https://www.linkedin.com/in/ericmckey/"><MDBIcon className="linkedinLogo" fab icon="linkedin" size="2x" list /></a></li>
                            </ul>
                        </div>
                        <div id="colorlib-footer">
                            <p><small>
                                Portfolio created with React
                            </small></p>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}