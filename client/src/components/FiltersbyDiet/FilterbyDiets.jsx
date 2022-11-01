import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { theFilterByDiet, getDiet} from "../../redux/actions/index";
import "./FilterDiets.css"

export function FilteredByDiets () {
    let key = 100
    const dispatch = useDispatch();
    const tipeDiet = useSelector(state => state.typeOfDiet)
    const onFilterChange = (e) => {
        e.preventDefault();
        dispatch(theFilterByDiet(e.target.value));
        dispatch(getDiet(e.target.value));
    };
    useEffect(()=>{
        dispatch(getDiet())
    },[dispatch]);
    
    return (
        <div className="OrderDiets"> Diets <br />
            <select className="types" onChange={e => onFilterChange(e)}>
                <option value="all">All</option>
            {tipeDiet?.map(el=><option value={el} key={key++}>Diet {el}</option>)}
            </select>
        </div>
    )
};

