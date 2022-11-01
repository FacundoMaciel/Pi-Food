import React from "react";
import { getRecipeByName } from "../../redux/actions/index";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2"
import "./SearchBar.css"


export function SearchBar () {
    const [input, setInput] = useState('');
    
    const dispatch = useDispatch();

    const theAlert = () => {
        Swal.fire({
            title: 'Error!',
            text: 'Incorrect search',
            icon: 'error',
            imageUrl: 'https://i.ytimg.com/vi/l4FH6NoMkE4/maxresdefault.jpg',
            imageWidth: 400,
            imageHeight: 200,
            confirmButtonText: 'OK'

        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(input === "") theAlert()
       
        if(Number(input)) theAlert()
        
        dispatch(getRecipeByName(input))
        
        setInput("")
    };
    
         

    const onChange = (e)=>{
        setInput(e.target.value)
    };

    // function handleClick(e){
    //     e.preventDefault();
    //     dispatch(getRecipes(input))
    //     setInput("")
    // }

    return(
        <div className="SearchBar">
            <form className="form_cotainerBar" onSubmit={e => onSubmit(e)}>
                <input 
                type="text" 
                placeholder="🔍 Search you recipe..."
                value={input}
                onChange={ e => onChange(e)}
                />
                <button type="submit"> Search </button>
            </form>
        </div>
    )
};
            