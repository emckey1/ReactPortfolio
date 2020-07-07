import React, { Component } from 'react';
import underConstruction from './coming-soon.jpg';

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <div>
                    <section id="portfolioScreen">
                        <div id="projectCarousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#projectCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#projectCarousel" data-slide-to="1"></li>
                                <li data-target="#projectCarousel" data-slide-to="2"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="item active">
                                    <img src={ underConstruction } alt="" />
                                </div>

                                <div className="item">
                                    <img src={ underConstruction } alt="" />
                                </div>

                                <div className="item">
                                    <img src={ underConstruction } alt="" />
                                </div>
                            </div>

                            <a className="left carousel-control" href="#projectCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#projectCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}