import React, { Component } from "react";
import { getRecipeById, clearDetails, deleteRecipe } from "../../redux/actions";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import  Loading  from "../../components/Loading/Loading";
import Swal from "sweetalert2"
import "./RecipeDetails.css"


let key = 1
const theAlert = () => {
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue?',
        icon: 'error',
        confirmButtonAriaLabel: 'Thumbs up'
    })
}
const theAlert2 = () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your recipe has been deleted.',
            'success',
          )
        }
      })
}
class RecipeDetails extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.getRecipeById(id);

    if (
      id.toString().length !== 36 &&
      id.toString().length !== 6 &&
      id.toString().length !== 7
    )
      theAlert();
  }

  handleClick = () => {
    this.props.deleteRecipe(this.props.recipeDetails.id);
    theAlert2();
  };

  componentWillUnmount() {
    this.props.clearDetails();
  }

  render() {
    return (
      <div className="DetailsDiv">
        <div className="diets">
        <img src={this.props.recipeDetails.image} alt="Error" />
        <h3>Health score: ❤️ {this.props.recipeDetails.healthScore}</h3>
              <h3>Dish types 🍲:</h3>
              {this.props.recipeDetails.dishType?.map((el) => {
                  return (
                    <li>{el}</li>
                );
            })}
              <h3>Diet types 🥗:</h3>
              {this.props.recipeDetails.dietTypes?.map((el) => (
                  <li key={key++} >{el.name ? el.name : el}</li>
              ))}
        </div>
        <div className="Delete">
          {this.props.recipeDetails?.createdInDb ? (
            <Link to="/home">
              <button onClick={() => this.handleClick()}>Delete recipe?</button>
            </Link>
          ) : null}
        </div>
        {this.props.recipeDetails.name ? (
          <div className="RecipeDetails">
            <h2> {this.props.recipeDetails.name} </h2>
            <div>
              <h3>Summary 👨‍🍳:</h3>
              {
                <p>
                  {this.props.recipeDetails?.summary?.replace(/<[^>]*>/g, "")}
                </p>
              }

              <h3>Recipe steps 🥣:</h3>
              {typeof this.props.recipeDetails.steps !== "string" ? (
                  this.props.recipeDetails.steps?.map((el) => {
                      return <p> {el.step} </p>;
                    })
                    ) : (
                        <p> {this.props.recipeDetails.steps} </p>
                        )}
            </div>
          </div>
        ) : (
            <Loading />
            )}
      </div>
    );
  }
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
        deleteRecipe: id => dispatch(deleteRecipe(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
