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
        dispatch(addRecipe(input));
        console.log(input)
        alert("You recipe has been created congrats")
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
        <form onSubmit={e => handleSubmit(e)}>
            <Link to="/home">
                <button>
                    To my HOME
                </button>
            </Link>
            <div>
                {console.log(input)}
                <input className="Name"
                    placeholder="name"
                    type="text"
                    name="name"
                    onChange={e => handleOnChange(e)}
                    value={input.name} 
                    />
                {errors.name && (<p>{errors.name}</p>)}

            </div>
            <div>
                <input
                    placeholder="dishType"
                    type="text"
                    name="dishType"
                    onChange={e => handleOnChange(e)}
                    value={input.dishType} 
                    />
            </div>
            <input
                placeholder="Summary"
                type="text"
                name="summary"
                onChange={handleOnChange}
                value={input.summary} />

            <input
                type="text"
                name="healthScore"
                placeholder="healthScore"
                onChange={e => handleOnChange(e)}
                value={input.healthScore} />
            {errors.healthScore && (<p>{errors.healthScore}</p>)}

            <input
                placeholder="Steps"
                type="text"
                name="steps"
                onChange={e => handleOnChange(e)}
                value={input.steps} />
            <input
                type="text"
                placeholder="Image"
                name="image"
                onChange={e => handleOnChange(e)}
                value={input.image}
            />

            <div>
                {typeOfDiet?.map(el => {
                    return (
                        <div>
                            <label>{el}</label>
                            <input type="checkbox" onChange={e => handleCheckBox(e)} selected={input.dietTypes.includes(el)} name={el} value={el} />

                        </div>
                    )
                })};
            </div>

            <button type="submit"> Create </button>
        </form>

    );
};

