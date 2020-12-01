import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import platziconfLogoImage from '../images/platziconf-logo.svg';
import astronautsImage from '../images/astronauts.svg';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="container">
                    <div className="row">
                        <div className="Home__col col-12 col-md-4">
                            <img
                                src={platziconfLogoImage}
                                alt="Platzi Conf Logo"
                                className="img-fluid mb-2"
                            />
                            <h2>PRINT YOUR BADGES</h2>
                            <h5>The easiest way to manage your conference</h5>
                            <Link className="btn btn-primary" to="/badges">Start</Link>
                            <hr/>
                            <Link className="btn btn-secondary" to="/rickandmorty">Rick And Morty</Link>
                        </div>

                        <div className="Home__col d-none d-md-block col-md-8">
                            <img
                                src={astronautsImage}
                                alt="Astronauts"
                                className="img-fluid p-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;