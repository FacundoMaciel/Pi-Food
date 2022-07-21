import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import {LandingPage} from "./components/Landing/LandingPage.jsx"
import myHome from "./components/Home/Home.jsx";
import  RecipeDetails  from "./components/RecipeDetails/RecipeDetails.jsx"
import  AddRecipe  from './components/CreateRecipe/AddRecipe';
import Error404 from './components/Error/Error404';



function App() {
  return (
    <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={myHome} />
        <Route exact path="/home/:id" component={RecipeDetails}/>
        <Route exact path="/myRecipe" component={AddRecipe}/>
        <Route path = "*" component={Error404}/>
    </div>
  );
};
        
     



export default App;




