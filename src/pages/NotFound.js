import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/NotFound.css"
import NotFoundImage from "../images/404.png"

function NotFound() {
    return (
        <div className="NotFound">
            <div className="container">
                <div className="row">
                    <div className="NotFound__col col-12 col-md-4">
                        <h1>404 Error</h1>
                        <h2>Page No Found !</h2>
                        <Link className="btn btn-primary" to="/">Home</Link>
                    </div>

                    <div className="NotFound__col d-none d-md-block col-md-8">
                        <img
                            src={NotFoundImage}
                            alt="Platzi Conf Logo"
                            className="img-fluid mb-2"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default NotFound;
