import axios from "axios";

export const ADD_RECIPE = "ADD_RECIPE"

export const getRecipes = ()=> {
    return function(dispatch){
        return fetch('http://localhost:3001/api/recipes')
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: "GET_RECIPES",
                payload: json
            });
        })
        .catch((e)=>{console.error(e)})
    };
};

export const getRecipeByName = (name)=> {
    return function(dispatch){
        return fetch(`http://localhost:3001/api/recipes?name=${name}`) 
        .then(res => res.json()) 
        .then(json => {
            dispatch({
                type: "GET_RECIPE_BY_NAME",
                payload: json
            });
        })
        .catch((e)=>{console.error(e)})
    };
};

export const getRecipeById = (id) => {
    return function (dispatch) {
        return fetch(`http://localhost:3001/api/recipes/${id}`)
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: "GET_RECIPE_BY_ID",
                payload: json[0]
            });
        })
        .catch((e)=>{console.error(e)})
    };
};

export const getDiet = () => {
    return async function(dispatch){
       try{let response = await axios.get('http://localhost:3001/api/diets')
       console.log(response);
       return dispatch({
        type: "GET_DIET",
        payload: response.data.map(el=>el.name)
       })}
       catch(e){
        console.log(e)
       }
    };

       
    // return function(dispatch){
    //     return fetch('http://localhost:3001/api/diets')
    //     .then(res => res.json())
    //     .then(json =>{
    //         dispatch({
    //             type: "GET_DIET",
    //             payload: json?.map(el => el.name)
    //         })
    //     })
    //     .catch((e)=>{console.error(e)})
    // };
};

export const theFilterByDiet = (payload) => {
    return{
        type: "FILTER_BY_DIET",
        payload: payload
    };
};

export const OrderAlphabetic = (order) => {
    return {
        type: "ALPHABETIC_ORDER",
        payload: order
    };
};


export const OrderHealthScore = (healthScore) => {
    return {
        type: "ORDER_HEALTH_SCORE",
        payload: healthScore
    };
};

export function addRecipe (payload) {
    console.log("PAYLOADDDDDDDD",payload)
    return async function (){
        try {
            let response = await axios.post("http://localhost:3001/api/myRecipe", payload)
            console.log("RESPONSEEEEEEEEEEE",response)
            return response
            
        } catch (error) {
            console.log(error)
        }
    }
};
        
// export const  CreateMyRecipe = (recipe) => dispatch => {
//     try {
//      return fetch("http://localhost:3001/api/myRecipe", {
//             method: "POST",
//             body: JSON.stringify(recipe),
//             headers: {"Content-Type":"application/json"}
//          })
//          .then(res => res.json()) 
         
         
//     } catch (error) {
        
//     };
// };
    




