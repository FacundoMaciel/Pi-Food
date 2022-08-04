import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import {OrderAlphabeticFunction} from "../AlphabeticalOrder/OrderAlphabetic";
import { FilteredByDiets } from "../FiltersbyDiet/FilterbyDiets.jsx";
import {OrderByScore} from "../OrderScore/OrderByScore";
import ApiOrdDb from "../FilteredByDbOrApi/ApiOrDb.jsx"
import "./NavBar.css"


export default function NavBar() {

    return (
        <div className="nav__bar">
            <div className="SearchBar">
                <SearchBar />
            </div>
                <img 
                    src="https://cdn3.iconfinder.com/data/icons/food-3-11/128/food_Chef-Cap-Hat-Cooking-Cook-Toque-128.png" 
                    alt="" 
                    width="70"
                    height="60"
                    />
            <div className="buttonsOrders">
                </div>
                <h2>Find your style of food❕ ➛ </h2>
                <div className="ORDER">
                    <OrderAlphabeticFunction />
                </div>
                <div className="Score">
                    <OrderByScore />
                </div>
                <div className="ApiOdb">
                    <ApiOrdDb />
                </div>
                <div className="FilteredByDiets">
                    <FilteredByDiets />
                </div>
                <div>
            </div>

        </div>
    )
}