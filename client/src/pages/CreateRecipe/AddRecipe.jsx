import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRecipe, getDiet, getRecipes } from "../../redux/actions";
import Swal from "sweetalert2";
import "./AddRecipe.css";

function validate(input) {
  const patron = new RegExp("^[ñíóáéú a-zA-Z ]+$");
  const errors = {};
  if (!input.name) {
    errors.name = "Complete with a recipe name";
  } else if (!patron.test(input.name)) {
    errors.name = "The name cannot contain numbers";
  }

  // if (input.healthScore < 1 || input.healthScore > 100) {
  //     errors.healthScore = "Complete field width values 1 to 100 please"
  // } else if ((!/^([0-9]|[1-9][0-9]|100)$/.test(input.healthScore))) { errors.healthScore = "Just numbers" }

  return errors;
}

export default function AddRecipe() {
  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes);

  const typeOfDiet = useSelector((state) => state.typeOfDiet);

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    summary: "",
    healthScore: "",
    steps: "",
    score: 0,
    dishType: "",
    dietTypes: [],
    image: "",
  });

  const theAlert = () => {
    Swal.fire({
      title: "Error",
      text: "The recipe already exists!",
      icon: "error",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
    });
  };
  const sweetCreate = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "If you did not compete all the fields your recipe will not be created correctly!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, create it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Created!", "Your recipe has been created.!", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Cancelled recipe", "error");
      }
    });
  };

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existsRecipe = recipes.filter(
      (rec) => rec.name.toLowerCase() === input.name.toLowerCase()
    );
    if (existsRecipe.length) theAlert();
    if (!existsRecipe.length) sweetCreate();

    dispatch(addRecipe(input));
    setInput({
      name: "",
      summary: "",
      healthScore: "",
      steps: "",
      score: 0,
      dishType: "",
      dietTypes: [],
      image: "",
    });
  };

  function handleCheckBox(e) {
    let newArray = input.dietTypes;
    let find = newArray.indexOf(e.target.value);

    if (find >= 0) {
      newArray.splice(find, 1);
    } else {
      newArray.push(e.target.value);
    }
    setInput({
      ...input,
      dietTypes: newArray,
    });
  }

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getDiet());
  }, [dispatch]);

  return (
    <div className="CreateDiv">
      <div className="createOr">
        Create your recipe Let's Go!
      </div>
      <div className="formDiv">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="divInputs">
            <div className="input">
              <label> Name </label>
              <input
                className="Name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => handleOnChange(e)}
                value={input.name}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="input">
              <label> Summary </label>
              <input
                placeholder="Summary"
                type="text"
                name="summary"
                onChange={handleOnChange}
                value={input.summary}
              />
            </div>
            <div className="input">
              <label>Health score: {input.healthScore} </label>
              <input
                type="range"
                min="1"
                max="100"
                name="healthScore"
                onChange={(e) => handleOnChange(e)}
                value={input.healthScore}
              />

              {errors.healthScore && <p>{errors.healthScore}</p>}
            </div>
            <div className="input">
              <label> Steps </label>
              <input
                placeholder="Steps"
                type="text"
                name="steps"
                onChange={(e) => handleOnChange(e)}
                value={input.steps}
              />
            </div>
            <div className="input">
              <label> Image </label>
              <div className="inputImage">
                <input
                  type="text"
                  placeholder="Image"
                  name="image"
                  onChange={(e) => handleOnChange(e)}
                  value={input.image}
                />
              </div>
            </div>
            <div className="inputDiets">Diets:
              {typeOfDiet?.map((el) => {
                return (
                  <div>
                    <label>{el}</label>
                    <input
                      type="checkbox"
                      className="boxType"
                      onChange={(e) => handleCheckBox(e)}
                      selected={input.dietTypes.includes(el)}
                      name={el}
                      value={el}
                      
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="submit">
            <button type="submit">Finished Creating</button>
          </div>
        </form>
      </div>
    </div>
  );
}
