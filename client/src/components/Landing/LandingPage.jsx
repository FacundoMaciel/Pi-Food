import React from "react";
import { Link } from "react-router-dom";
import "../Landing/LandingPage.css"

export const LandingPage= () => {
    return (
        <div className="Landing">
            <div className="soyHenry">
                <img 
                src="https://assets.soyhenry.com/logoOG.png" 
                alt="" 
                width="80"
                height="60"
                />
            </div>
            <div className="Welcome">
                <h1 className="text"> WELCOME </h1>
            </div>
            <div className="cocinero">
                <img 
                src="https://th.bing.com/th/id/R.b0f5206c752d2a3fb0429030ed351372?rik=Z2iajcOdjqS2HA&riu=http%3a%2f%2fwww.canalgif.net%2fGifs-animados%2fProfesiones%2fCocineros%2fImagen-animada-Cocinero-54.gif&ehk=KKHNl2wTRBF8ic8fbv3eTCceyXsmqtWbnXOkMxoAZ%2fM%3d&risl=&pid=ImgRaw&r=0" 
                alt="" 
                width="90"
                height="70"
                />
            </div>
            <div className="Presentacion">
                <h2> Hello  I invite you to look for a recipe </h2>
                 <h2> that you like or ¡create your own!, click to </h2>   
                   
                
            </div>
                

            <div className="btn">
                <Link to={'/home'}>
                    <button className="btnInicial"> Enter Now </button>
                </Link>
            </div>
            
        </div>
    );
};
            



            
            
            


