import axios from "axios";

export const GET_RECIPES = "GET_RECIPES"
export const GET_RECIPE_BY_NAME = "GET_RECIPE_BY_NAME"
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID"
export const GET_DIET = "GET_DIET"
export const FILTER_BY_DIET = "FILTER_BY_DIET"
export const ALPHABETIC_ORDER = "ALPHABETIC_ORDER"
export const ORDER_HEALTH_SCORE = "ORDER_HEALTH_SCORE"
export const ADD_RECIPE = "ADD_RECIPE"
export const CLEAR_DETAILS = "CLEAR_DETAILS"
export const FILTER_DB_API = "FILTER_DB_API"
export const UPDATE_RECIPE = "UPDATE_RECIPE"
export const DELETE_RECIPE = "UPDATE_RECIPE"



export const getRecipes = ()=> {
    return async function(dispatch){
        try{let response = await axios.get('/api/recipes')
        return dispatch({
                type: GET_RECIPES,
                payload: response.data
            })}
        catch(e){
            console.log(e)
           }
    };
};

export const getRecipeByName = (name)=> {
    return async function(dispatch){
       try{ let response = await axios.get(`/api/recipes?name=${name}`) 
        return dispatch({
                type: GET_RECIPE_BY_NAME,
                payload: response.data
            })}
            catch(e){
                console.log(e)
            }
    };
};

export const getRecipeById = (id) => {
    return async function (dispatch) {
        try{let response = await axios.get(`/api/recipes/${id}`)
        
         return dispatch({
                type: GET_RECIPE_BY_ID,
                payload: response.data[0]
            })}
            catch(e){
                console.log(e)
            }
    };
};

export const getDiet = () => {
    return async function(dispatch){
       try{let response = await axios.get('/api/diets')
       console.log(response);
       return dispatch({
        type: GET_DIET,
        payload: response.data.map(el=>el.name)
       })}
       catch(e){
        console.log(e)
       }
    };
};

export const theFilterByDiet = (payload) => {
    return{
        type: FILTER_BY_DIET,
        payload: payload
    };
};

export const OrderAlphabetic = (order) => {
    return {
        type: ALPHABETIC_ORDER,
        payload: order
    };
};


export const OrderHealthScore = (healthScore) => {
    return {
        type: ORDER_HEALTH_SCORE,
        payload: healthScore
    };
};

export function addRecipe (payload) {
    return async function (){
        try {
            let response = await axios.post("/api/myRecipe", payload)
            return response
            
        } catch (error) {
            console.log(error)
        }
    }
};

export function updateRecipe (id, payload) {
    return async () => {
      try {
        await axios.put(`/api/myRecipe/${id}`, payload);
      } catch (e) {
        console.error(e);
      }
    };
  };
  
  export function deleteRecipe (id)  {
    return async () => {
      try {
        await axios.delete(`/api/myRecipe/${id}`);
      } catch (e) {
        console.error(e);
      }
    };
  };

export function clearDetails(){
    return{
        type: CLEAR_DETAILS
    }
};

export function filterDbApi(payload){
    return{
        type: FILTER_DB_API,
        payload,
    }
}
        




