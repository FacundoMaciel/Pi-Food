import React from "react";
import {OrderHealthScore} from "../../actions";
import { useDispatch } from "react-redux";

export function OrderByScore() {

    const dispatch = useDispatch();

    function handleOrderScore(e) {
        e.preventDefault();
        dispatch(OrderHealthScore(e.target.value));
    };

    return (
        <div>
            <select className="ORDER_H_SCORE" onChange={handleOrderScore}>
                <option value="null"> SELECT HEALTHY SCORE </option>
                <option value="desc"> BEST SCORES </option>
                <option value="asc"> WORST SCORES </option>
            </select>
        </div>
    )
};


