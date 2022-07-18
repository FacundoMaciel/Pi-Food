import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes } from "../../actions";
import Recipe from "../Recipe/Recipe";
import { SearchBar } from "../SearchBar/SearchBar";
import  Paginated  from "../Paginated/Paginated"
import { FilteredByDiets } from "../FiltersbyDiet/FilterbyDiets.jsx";
import {OrderAlphabeticFunction} from "../AlphabeticalOrder/OrderAlphabetic";
import {OrderByScore} from "../OrderScore/OrderByScore";
import  Loading  from "../Loading/Loading.jsx"
import "./Home.css"


export default function MyHome(){
    
    const dispatch = useDispatch();
    let theRecipes = useSelector((state)=> state.recipes);
    //console.log(theRecipes)

    let [paginated, setPaginated] = useState(1);
    let [recipesPerPage] = useState(9);
    
    const lastRecipeLocation = paginated * recipesPerPage;
    const firstRecipeLocation = lastRecipeLocation - recipesPerPage;
    const recipesPages = theRecipes.slice(firstRecipeLocation, lastRecipeLocation);

    const thePaging = (pageNumber)=>{
        setPaginated(pageNumber);
    };


    useEffect(()=> {
         dispatch(getRecipes())
    },[dispatch]);


    return (
        <div className="principalDiv">
            <nav className="navOfWorks">
                <div className="SearchBar">
                    <SearchBar />
                </div>
            </nav>
            <div >
                <Link to="/myRecipe">
                    <button className="createBtn"> create you recipe </button>
                </Link>
            </div>
            <div className="ORDER">
                <OrderAlphabeticFunction/>
            </div>
                <div className="FilteredByDiets">
                    <FilteredByDiets />
                </div>
            <div>
                <OrderByScore/>
            </div>
            <div>
                {recipesPages ? recipesPages.map(element => { // the recipes es el estado global de donde saco la info
                    return <Recipe name={element.name} key={element.id}
                        image={element.image} dietTypes={element.dietTypes} id={element.id}
                    />
                }) : <Loading/>}
                <div className="Paginated">
                <Paginated
                    theRecipes={theRecipes.length}
                    paginated= {paginated}
                    recipesPerPage={recipesPerPage}
                    thePaging={thePaging}
                />
                </div>
            </div>
        </div>
    );
};
