import React from 'react';
import { Route } from "react-router-dom"
import landingPage from "../src/pages/Landing/LandingPage"
import myHome from "../src/pages/Home/Home";
import recipeDetails  from "../src/pages/RecipeDetails/RecipeDetails"
import addRecipe  from '../src/pages/CreateRecipe/AddRecipe';





function App() {
  return (
    <div >
        <Route exact path="/" component={landingPage} />
        <Route exact path="/home" component={myHome} />
        <Route exact path="/home/:id" component={recipeDetails}/>
        <Route exact path="/myRecipe" component={addRecipe}/>
    </div>
  );
};
        
     



export default App;




