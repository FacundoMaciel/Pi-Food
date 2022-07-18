import React from "react";
import { Link } from "react-router-dom";
import "../Landing/LandingPage.css"

export const LandingPage= () => {
    return (
        <div className="Landing">

            <div className="Welcome">
            <h1> WELCOME TO THE PAGE OF FOODS </h1>
            </div>

            <div className="btn">
            <Link to={'/home'}>
            <button className="btnInicial"> Enter Now </button>
            </Link>
            </div>
            
        </div>
    );
};
            
            


