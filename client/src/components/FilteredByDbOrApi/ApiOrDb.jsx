import React from "react";
import { useDispatch } from "react-redux";
import { filterDbApi } from "../../actions";


export const ApiOrdDb = () =>{
    const dispatch = useDispatch();

    const onFilterChange = (e) => {
        e.preventDefault();

        console.log(e.target.value)
        dispatch(filterDbApi(e.target.value));
    };
    

    return(
        <div>
            <select className="typesRecipes" onChange={e => onFilterChange(e)}>
                <option value="all"> All recipes </option>
                <option value="api"> Api recipes </option>
                <option value="dataBase"> Data base recipes </option>
            </select>
        </div>
    )

};

export default ApiOrdDb;