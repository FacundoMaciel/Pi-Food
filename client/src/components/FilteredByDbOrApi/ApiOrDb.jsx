import React from "react";
import { useDispatch } from "react-redux";
import { filterDbApi } from "../../redux/actions/index";
import "./DbOrApi.css"


export const ApiOrdDb = () =>{
    const dispatch = useDispatch();

    const onFilterChange = (e) => {
        e.preventDefault();

        console.log(e.target.value)
        dispatch(filterDbApi(e.target.value));
    };
    

    return(
        <div className="orderOrigin"> Recipes <br />
            <select className="typesRecipes" onChange={e => onFilterChange(e)}>
                <option value="all"> All </option>
                <option value="api"> All recipes </option>
                <option value="dataBase"> Recipes Created</option>
            </select>
        </div>
    )

};

export default ApiOrdDb;