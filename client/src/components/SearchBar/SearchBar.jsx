import React from "react";
import { getRecipeByName, getRecipes } from "../../actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchBar.css"


export function SearchBar () {
    const [input, setInput] = useState('');
    
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(input === "") alert("Complete the field please")
       
        if(Number(input)) alert("No numbers in this field")
        
        dispatch(getRecipeByName(input))
        
        setInput("")
    };
    
         

    const onChange = (e)=>{
        setInput(e.target.value)
        
        
    };

    function handleClick(e){
        e.preventDefault();
        dispatch(getRecipes(input))
        setInput("")
    }

    return(
        <div className="SearchBar">
                <div>
                <button className="reload" onClick={e => handleClick(e)}>
                    Reload Recipes
                </button>
               </div>
            <form className="form_cotainerBar" onSubmit={e => onSubmit(e)}>
                <input className="recipeInput"
                type="text" 
                placeholder="Search recipe..."
                value={input}
                onChange={ e => onChange(e)}
                />
                <button className="Searcher" type="submit"> Search </button>
                
            </form>
        </div>
    )
};
            