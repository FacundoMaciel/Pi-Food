import React from "react";
import { Link } from "react-router-dom";


export default function Error404(){

    return(
        <div>
            <Link to="/home">
             <button>To home</button>
            </Link>
            <h2> Error not found </h2>
        </div>
    );
};
