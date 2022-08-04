import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addRecipe, getDiet, getRecipes } from "../../actions"
import "./AddRecipe.css"

function validate(input) {
    const patron = new RegExp('^[ñíóáéú a-zA-Z ]+$')
    const errors = {};
    if (!input.name) {
        errors.name = "Complete with a recipe name";
    } else if (!patron.test(input.name)) { errors.name = "The name cannot contain numbers" }

    if (input.healthScore < 1 || input.healthScore > 100) {
        errors.healthScore = "Complete field width values 1 to 100 please"
    } else if ((!/^([0-9]|[1-9][0-9]|100)$/.test(input.healthScore))) { errors.healthScore = "Just numbers" }
    
    return errors;
};




export default function AddRecipe() {

    const dispatch = useDispatch();
    
    const recipes = useSelector(state => state.recipes)

    const typeOfDiet = useSelector(state => state.typeOfDiet);
    
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: "",
        summary: "",
        healthScore: "",
        steps: "",
        score: 0,
        dishType:"",
        dietTypes: [],
        image: "",
    });

    const handleOnChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const existsRecipe = recipes.filter(rec => rec.name.toLowerCase() === input.name.toLowerCase())
        if (existsRecipe.length) {
            return alert("Recipe already exists")
        };

        dispatch(addRecipe(input));
        alert("You recipe has been created congrats ✩·͙*̩̩͙˚̩̥̩̥( ͡ᵔ ͜ʖ ͡ᵔ )*̩̩͙✩·͙˚̩̥̩̥.")
        setInput({
            name: "",
            summary: "",
            healthScore: "",
            steps: "",
            score:0,
            dishType:"",
            dietTypes: [],
            image: "",
        });
    };
        
    
    function handleCheckBox(e){
        let newArray = input.dietTypes
        let find = newArray.indexOf(e.target.value)
        console.log(find)
        console.log(newArray)
        if(find >= 0){
            newArray.splice(find, 1)
        } else {
            newArray.push(e.target.value)
        }
        setInput({
            ...input,
            dietTypes: newArray
        })    
    };

    useEffect(() => {
        dispatch(getRecipes())
        dispatch(getDiet())
    }, [dispatch])

    return (
     <div className="CreateDiv">
            <Link to="/home">
                    <img className="backImg"
                    src="https://th.bing.com/th/id/R.de6a5e67889cb18f8de737772f84d494?rik=LV3mbFZOVDUhCw&pid=ImgRaw&r=0" 
                    alt="" 
                    />
                </Link>
        <div className="formDiv">
        <h1> <span>Create your recipe</span> Lets GO! </h1>
        <form onSubmit={e => handleSubmit(e)}>
            <div className="divInputs">
            <div className="input">
                <label> Name </label>
                <input className="Name"
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={e => handleOnChange(e)}
                    value={input.name} 
                    />
                {errors.name && (<p>{errors.name}</p>)}
            </div>
            <div className="input">
            <label> Summary </label>
            <input
                placeholder="Summary"
                type="text"
                name="summary"
                onChange={handleOnChange}
                value={input.summary} />
            </div>
            <div className="input">
            <label> Health Score </label>
            <input
                type="text"
                name="healthScore"
                placeholder="healthScore"
                onChange={e => handleOnChange(e)}
                value={input.healthScore} />
            {errors.healthScore && (<p>{errors.healthScore}</p>)}
            </div>
            <div className="input">
            <label> Steps </label>
            <input
                placeholder="Steps"
                type="text"
                name="steps"
                onChange={e => handleOnChange(e)}
                value={input.steps} />
            </div>
            <div className="input">
            <label> Image </label>
            <div className="inputImage">
            <input
                type="text"
                placeholder="Image"
                name="image"
                onChange={e => handleOnChange(e)}
                value={input.image}
            />
                
            </div>
            </div>
            <div className="inputDiets">
                {typeOfDiet?.map(el => {
                    return (
                        <div>
                            <label>{el}</label>
                            
                            <input type="checkbox" className="boxType" 
                            onChange={e => handleCheckBox(e)} 
                            selected={input.dietTypes.includes(el)} 
                            name={el} 
                            value={el} 
                            />
                            
                        </div>
                    )
                })}
            </div>
            </div>
                <img className="cocinerito" 
                        src="https://th.bing.com/th/id/R.b0f5206c752d2a3fb0429030ed351372?rik=Z2iajcOdjqS2HA&riu=http%3a%2f%2fwww.canalgif.net%2fGifs-animados%2fProfesiones%2fCocineros%2fImagen-animada-Cocinero-54.gif&ehk=KKHNl2wTRBF8ic8fbv3eTCceyXsmqtWbnXOkMxoAZ%2fM%3d&risl=&pid=ImgRaw&r=0" 
                        alt="" 
                        width="70"
                        height="50"
                        />
            <div className ="submit">
            <button type="submit">Finished Creating</button>
            </div>
        </form>
        </div>
     </div>
    );
};





