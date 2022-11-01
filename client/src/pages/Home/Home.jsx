import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";
import Recipe from "../../components/Recipe/Recipe";
import  Paginated  from "../../components/Paginated/Paginated"
import  Loading  from "../../components/Loading/Loading"
import "./Home.css"
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";


export default function MyHome(){
    
    let key = 1;
    const dispatch = useDispatch();
    let theRecipes = useSelector((state)=> state.recipes);
    

    let [paginated, setPaginated] = useState(1);
    let [recipesPerPage] = useState(10);
    
    const lastRecipeLocation = paginated * recipesPerPage;
    const firstRecipeLocation = lastRecipeLocation - recipesPerPage;
    const recipesPages = theRecipes.slice(firstRecipeLocation, lastRecipeLocation);

    const nextPage = function (){
         setPaginated(paginated+1)
    }
    const previousPage = function (){
         setPaginated(paginated-1)
    }

    const thePaging = (pageNumber)=>{
        setPaginated(pageNumber);
    };


    useEffect(()=> {
         dispatch(getRecipes())
    },[dispatch]);



    return (
      <div className="principalDiv">
        <nav className="nav">
          <div className="navBar">
            <NavBar />
          </div>
          <div className="Paginated">
            <Paginated
              paginated={paginated}
              recipesPerPage={recipesPerPage}
              thePaging={thePaging}
              nextPage={nextPage}
              previousPage={previousPage}
            />
          </div>
        </nav>
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="CardsRecipes">
          {theRecipes.length ? (
            recipesPages?.map((element) => {
              return (
                <Recipe
                  name={element.name}
                  key={key++}
                  image={element.image}
                  dietTypes={element.dietTypes}
                  id={element.id}
                  healthScore={element.healthScore}
                />
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    );
};
