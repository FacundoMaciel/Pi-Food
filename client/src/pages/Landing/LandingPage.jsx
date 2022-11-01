import React from "react";
import { Link } from "react-router-dom";
//import LandingIMG1 from "../../assets/LandingIMG1.webp"
import logoHenry from "../../assets/logoHenry.png"
import "../Landing/LandingPage.css"

//find your favorite recipe or create your own
export default function LandingPage() {
    return (
      <div className="container">
        <div className="landing">
            <a target="_blank" rel="noreferrer" href="https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_ARG_BRAND&utm_content=brand">
          <img src={logoHenry} alt="NotFound" width="70px" height="50px" />
          </a>
        </div>
        <div className="btn">
          <h1>Welcome to App Foods </h1>
          <span>Find your favorite recipe or create your own</span>
          <br /> 
          <span>You can search, sort, filter the recipes as you like!</span> 
          <h2> Welcome  </h2>
            <br />
            <br />
            <div className="enterBtn">
          <Link to="/home">
              <h3>Enter Now</h3>
          </Link>

            </div>
        </div>
      </div>
    );
};
                   

            



            
            
            


