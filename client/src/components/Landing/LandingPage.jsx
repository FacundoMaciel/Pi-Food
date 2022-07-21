import React from "react";
import { Link } from "react-router-dom";
import "../Landing/LandingPage.css"

export const LandingPage= () => {
    return (
        <div className="Landing">


            <div className="btn">
            <Link to={'/home'}>
            <button className="btnInicial"> Enter Now </button>
            </Link>
            </div>
            <div className="Welcome">
            <h1> WELCOME TO THE PAGE OF FOODS </h1>
            </div>
            <div className="texto">
            <h1>
            Hello welcome,
            </h1>
            <h1>
            on this page you can find all kinds of recipes
            
            </h1> 
            <h1>
            click on button "enter now"!
            
            </h1> 
            </div>
            
        </div>
    );
};
            
            


