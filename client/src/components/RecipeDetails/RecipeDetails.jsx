import React, { Component } from "react";
import { getRecipeById, clearDetails } from "../../actions";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Error404 from "../Error/Error404";
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
                    
                        <h2>DETAILS: </h2>
                        <h3> {this.props.recipeDetails.name} </h3>
                        <h4>Health score: 💖 {this.props.recipeDetails.healthScore}</h4>
                        <img src={this.props.recipeDetails.image} alt="Error" />

                        <h4>Dish types 🍲:</h4>
                        {this.props.recipeDetails.dishType?.map(el => {
                            return (
                                <h5><li>{el}</li></h5>)
                        })}


                        <h4>Diet types 🥗:</h4>
                        {this.props.recipeDetails.dietTypes?.map(el => <h5><li>{el.name ? el.name : el}</li></h5>)}

                        <h4>Summary 👨‍🍳:</h4>
                        {<h5>{this.props.recipeDetails?.summary?.replace(/<[^>]*>/g, '')}</h5>}

                        <h4>Recipe steps 🥣:</h4>
                        {
                            typeof this.props.recipeDetails.steps !== "string" ?
                                this.props.recipeDetails.steps?.map(el => {
                                    return (
                                        <h5> {el.step} </h5>
                                    )
                                }) : <h5> {this.props.recipeDetails.steps} </h5>
                        }
                    </div>
                    : <Error404/>}
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
