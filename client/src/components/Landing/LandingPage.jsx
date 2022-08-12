import React from "react";
import { Link } from "react-router-dom";
import "../Landing/LandingPage.css"

export default function LandingPage() {
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
                <img
                    src="https://th.bing.com/th/id/R.71fb7032d586b8abd5447dc6f9c2f287?rik=RxEdXx1gW%2bY3Yg&pid=ImgRaw&r=0"
                    alt=""
                    width="300"
                    height="105"
                />
            </div>
            <div className="slogan">
                <h2> Hello  I invite you to look for a recipe </h2>
                <h2> that you like or ¡create your own!, click to </h2>
            </div>
            <div className="cocinero">
                <Link to={'/home'}>
                    <img
                        src="https://cdn2.iconfinder.com/data/icons/food-ink/512/chef-512.png"
                        alt=""
                        width="100"
                        height="90"
                    />
                </Link>
            </div>

        </div>
    );
};
                   
                
                
            



            
            
            


