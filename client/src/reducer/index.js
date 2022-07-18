import { ADD_RECIPE } from "../actions/index"

const initialState = {
    recipes : [],
    allRecipes : [],
    typeOfDiet: [],
    recipeDetails: {},
};

export default function reducer (state = initialState, action){

    switch(action.type){
        case "GET_RECIPES":
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            };
        case "GET_RECIPE_BY_NAME":
            return {
                ...state,
                recipes: action.payload
            };
        case "GET_RECIPE_BY_ID":
            return {
                ...state,
                recipeDetails: action.payload
            };
            
        case "GET_DIET":
            console.log(state.typeOfDiet)
            return {
                ...state,
                typeOfDiet: action.payload
            };
        case "FILTER_BY_DIET":
            let allRecipesState = state.allRecipes;
            console.log(allRecipesState)
            let dietsOfApi = action.payload === "all"?allRecipesState?allRecipesState
            : null
            : allRecipesState.filter(el => el.dietTypes?.some(
                d => d.name ? d.name === action.payload 
                : d === action.payload))
            
            let newArray = []
            for (let i = 0; i < allRecipesState.length; i++) {
                if(allRecipesState[i].vegetarian === true){
                    newArray.push(allRecipesState[i])
                };
            }
            let arrayFiltered = []
            dietsOfApi.forEach(el => {
                if (!newArray.includes(el)){
                    arrayFiltered.push(el)
                };
            });
            newArray.forEach(el =>{
                if(!dietsOfApi.includes(el)){
                    arrayFiltered.push(el);
                }
            });
            return {
                ...state,
                recipes: action.payload === "vegetarian" ? arrayFiltered: dietsOfApi
            };
        case "ALPHABETIC_ORDER":
            let recipesOrderAsc = [...state.recipes];
            recipesOrderAsc.sort((a,b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return action.payload === 'asc' ? -1 : 1
                }
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return action.payload === 'asc' ? 1 : -1
                }
                return 0;
            });
            return {
                ...state,
                recipes: recipesOrderAsc
            };
            case "ORDER_HEALTH_SCORE":
                let orderByScore = [...state.recipes];
                let orderByHscore = 
                action.payload === "asc"
                ? orderByScore.sort((a,b)=>{
                    return a.healthScore - b.healthScore
                })
                : orderByScore.sort((a,b)=>{
                    return b.healthScore - a.healthScore
                })    
                // let orderByHscore = [...state.recipes];
                // orderByHscore = orderByHscore.sort((a,b) =>{
                //     if(a.healthScore > b.healthScore){
                //         return action.payload === "asc" ? 1 : -1 
                //     }
                //     if(a.healthScore < b.healthScore){
                //         return action.payload === "asc" ? -1 : 1 
                //     }
                //     return 0;
                // })
                
                return{
                    ...state,
                    recipes: orderByHscore,                   
                };
                
                case ADD_RECIPE:
                    return {
                        ...state,
                    }
                    
            default: 
                return state
            
        };
    };
    
                