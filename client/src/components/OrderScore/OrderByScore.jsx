import React from "react";
import {OrderHealthScore} from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import "./OrderScore.css"

export function OrderByScore() {

    const dispatch = useDispatch();

    function handleOrderScore(e) {
        e.preventDefault();
        dispatch(OrderHealthScore(e.target.value));
    };

    return (
        <div className="HealthScore">Score <br />
            <select className="ORDER_H_SCORE" onChange={handleOrderScore}>
                <option value="all"> All  </option>
                <option value="desc"> Best  </option>
                <option value="asc"> Worst </option>
            </select>
        </div>
    )
};


