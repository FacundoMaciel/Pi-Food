import React from "react";
import "./Presentation.css"
import { Link } from "react-router-dom";

export default function Presentation() {
    return (
        <div className="homeShow">
            <h2>All recipes for free, create your own ❕... </h2>
            <h2>  ➛ 
                {/* <img 
                    src="https://th.bing.com/th/id/R.5be6ebdb01f7a5e3a27c96ce3d1968f0?rik=nrl%2f%2flb7fqR99w&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fx%2fF%2fB%2f3%2fr%2fa%2fright-arrow-hi.png&ehk=t%2bRGEANoarOk4Ba5VbpfVtNuGFuUpUCdnaV1yH8z8bo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
                    alt=""
                    width="80"
                    height="80"
                /> */}

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