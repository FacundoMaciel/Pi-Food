import React  from "react";
import { useDispatch } from "react-redux";
import { theFilterByDiet} from "../../actions";

export function FilteredByDiets () {
    const dispatch = useDispatch();

    const onFilterChange = (e) => {
        e.preventDefault();
        dispatch(theFilterByDiet(e.target.value));
    };

    return (
        <div>
            <select className="types" onChange={e => onFilterChange(e)}>
                <option value="all">All</option>
                <option value="gluten free">Gluten Free</option>
                <option value="ketogenic">Ketogenic</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="lacto vegetarian">Lacto Vegetarian</option>
                <option value="ovo vegetarian">Ovo Vegetarian</option>
                <option value="lacto ovo">Lacto Ovo</option>
                <option value="vegan">Vegan</option>
                <option value="pescatarian">Pescetarian</option>
                <option value="paleolithic">Paleolithic</option>
                <option value="fodmap friendly">Low Fodmap</option>
                <option value="whole 30">Whole 30</option>
                <option value="dairy free">Dairy Free</option>
                <option value="lacto ovo vegetarian">Lacto Ovo egetarian</option>
            </select>
        </div>
    )
};

