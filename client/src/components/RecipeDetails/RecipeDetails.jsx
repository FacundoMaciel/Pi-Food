import React, { Component } from "react";
import { getRecipeById, clearDetails } from "../../actions";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import  Loading  from "../Loading/Loading.jsx"
import "./RecipeDetails.css"


class RecipeDetails extends Component{
    
    
    componentDidMount(){
       
        const id = this.props.match.params.id;
        
        this.props.getRecipeById(id);
        console.log(id)
    };
    /*
    imagen(image)-> SI
    nombre(name)-> SI
    tipo de plato(dishTypes)-> SI
    tipos de dietas(dietTypes)-> SI
    resumen del plato(summary)-> SI
    nivel de comida saludable(healthScore)-> SI
    paso a paso(steps-step)-> SI
    */
   componentWillUnmount(){

    this.props.clearDetails()

   }
   
    render(){
        
        return (
            <div className="GeneralDiv">
                <div>
                    <Link to="/home">
                        <img className="backImg"
                            src="https://th.bing.com/th/id/R.de6a5e67889cb18f8de737772f84d494?rik=LV3mbFZOVDUhCw&pid=ImgRaw&r=0"
                            alt=""
                        />
                    </Link>
                </div>
                {this.props.recipeDetails.name ?
                    <div className="RecipeDetails">

                        <h1>DETAILS: </h1>
                        <h1> {this.props.recipeDetails.name} </h1>
                        <h2>Health score: 💖 {this.props.recipeDetails.healthScore}</h2>
                        <img src={this.props.recipeDetails.image} alt="Error" />

                        <h2>Dish types 🍲:</h2>
                        {this.props.recipeDetails.dishType?.map(el => {
                            return (
                                <h5><li>{el}</li></h5>)
                        })}


                        <h2>Diet types 🥗:</h2>
                        {this.props.recipeDetails.dietTypes?.map(el => <h5><li>{el.name ? el.name : el}</li></h5>)}

                        <h2>Summary 👨‍🍳:</h2>
                        {<h5>{this.props.recipeDetails?.summary?.replace(/<[^>]*>/g, '')}</h5>}

                        <h2>Recipe steps 🥣:</h2>
                        {
                            typeof this.props.recipeDetails.steps !== "string" ?
                                this.props.recipeDetails.steps?.map(el => {
                                    return (
                                        <h5> {el.step} </h5>
                                    )
                                }) : <h5> {this.props.recipeDetails.steps} </h5>
                        }


                    </div>
                    : <Loading />}
            </div>
        )
    };

};

function mapStateToProps(state) {
    return {
        recipeDetails: state.recipeDetails
    };

}

function mapDispatchToProps(dispatch) {
    return {
        getRecipeById: id => dispatch(getRecipeById(id)),
        clearDetails: () => dispatch(clearDetails()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
