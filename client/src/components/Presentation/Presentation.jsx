import React from "react";
import "./Presentation.css"
import { Link } from "react-router-dom";

export default function Presentation() {
    return (
        <div className="homeShow">
            <h2>All recipes for free, create your own ❕... </h2>
            <h2>  ➛
            </h2>
            <div >
                <Link to="/myRecipe">
                    <button className="createBtn">
                        <span class="btnAdd">Create you recipe</span>
                    </button>
                </Link>
            </div>

        </div>

    )
}