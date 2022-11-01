import React from "react";
import { Link } from "react-router-dom";

import "./Recipe.css";

export default function Recipe({ image, name, id, healthScore, dietTypes }) {
  return (
    <div className="recipeCard">
      <div className="name">
        <h2>{name.slice(0,40)}...</h2>
      </div>
      <Link to={`/home/${id}`} key={id}>
        <img className="img" src={image} alt="Not found" />
      </Link>
      <p>{dietTypes}</p>
      <div className="score">
        <img
          src="https://pbs.twimg.com/profile_images/1932167208/logo.png"
          alt=""
          height="50"
          width="70"
        />
        <h1>{healthScore}(Health score)</h1>
      </div>
    </div>
  );
}
