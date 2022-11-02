import React from "react";
import { OrderAlphabeticFunction } from "../AlphabeticalOrder/OrderAlphabetic";
import ApiOrdDb from "../FilteredByDbOrApi/ApiOrDb";
import { FilteredByDiets } from "../FiltersbyDiet/FilterbyDiets";
import { OrderByScore } from "../OrderScore/OrderByScore";
import { FcFilledFilter } from 'react-icons/fc';
import { SiCodechef } from 'react-icons/si';
import { BiReset } from 'react-icons/bi';
import "./SideBar.css"

function SideBar() {
	

  
	return (
    <div className="sideBar"> 
    <a href="/home">
      <BiReset size={30}/>
    </a>
    <FcFilledFilter size={30}/>
      <div> 
        <OrderAlphabeticFunction />
      </div>
      <div>
        <OrderByScore />
      </div>
      <div>
        <ApiOrdDb />
      </div>
      <div>
        <FilteredByDiets />
      </div>
      <div>
      </div>
      <SiCodechef size={50} color="white"/>
    </div>
  );
}

export default SideBar;