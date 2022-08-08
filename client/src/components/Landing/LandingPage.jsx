import React from "react";
import { Link } from "react-router-dom";
import "../Landing/LandingPage.css"

export const LandingPage= () => {
    return (
        <div className="Landing">
            <div className="Welcome">
                <h1 className="text"> WELCOME </h1>
            </div>
            <div className="Presentacion">
                <h2> Hello  I invite you to look for a recipe </h2>
                 <h2> that you like or ¡create your own!, click to </h2>   
                   
                
            </div>
                
            <div className="cocinero">
                <img 
                src="https://cdn3.iconfinder.com/data/icons/food-3-11/128/food_Chef-Cap-Hat-Cooking-Cook-Toque-128.png" 
                alt="" 
                width="90"
                height="70"
                />
            </div>

            <div className="btn">
                <Link to={'/home'}>
                    <button className="btnInicial"> Enter Now </button>
                </Link>
            </div>
            <div className="soyHenry">
                <img 
                src="https://assets.soyhenry.com/logoOG.png" 
                alt="" 
                width="80"
                height="60"
                />
            </div>
            
        </div>
    );
};
            



            
            
            


