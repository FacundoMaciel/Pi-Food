import React from "react";
import { Link } from "react-router-dom";
import "./Recipe.css"



export default function Recipe({ image, name, dietTypes,id }) {

    let dietsKey = 1
    // console.log("AAAAAAAAAAAAAAAAAAAAAAA",id)
    return (
        <div className="recipeCard">
            <div>
                <h2>{name}</h2>
            <div>
                <img className= "img" src={image} alt="Not found" />
            </div>
            <div className="typesDiet"> Diet Types:
            
            {dietTypes?.map(el => 
            <li className="diets" key={dietsKey++}>
                {el.name ? el.name : el}</li>)}
            </div>
            <div>
            <Link to={`/home/${id}`} key={id}>
                <button className="Details"> More info </button>
            </Link>
            </div>
            </div>
        </div>

    );
};

                
            

