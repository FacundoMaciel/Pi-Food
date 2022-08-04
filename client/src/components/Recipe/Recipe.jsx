import React from "react";
import { Link } from "react-router-dom";
import "./Recipe.css"



export default function Recipe({ image, name, dietTypes,id ,healthScore }) {

    // let dietsKey = 1
    
    return (
        <div className="recipeCard">
            <h2>{name}</h2>
            <img className="img" src={image} alt="Not found" />
            <Link to={`/home/${id}`} key={id}>
                <button className="btnDetails"> More info </button>
            </Link>
            {/* <h3>Diet types of this recipe:</h3>
            {dietTypes?.map(el => <h4 className="diets" key={dietsKey++}>{el.name ? el.name : el}</h4>)} */}
            <h3>Health score</h3>
            <img 
            src="https://th.bing.com/th/id/R.f66006a1a5ac9b59633d419d595737fd?rik=T%2b%2bAJIVAgJ8hMw&pid=ImgRaw&r=0" 
            alt="" 
            height="70"
            width="90"
            />
            <h2>{healthScore}</h2>
        </div>

    );
};
            
            
            
            

                
            

