import React from "react";
import { useDispatch } from "react-redux";
import { OrderAlphabetic } from "../../redux/actions/index";
import "./OrderAlphabetic.css"


export function OrderAlphabeticFunction(){
    const dispatch =  useDispatch();

    function onHandleChange(e){
      dispatch(OrderAlphabetic(e.target.value))
    };
  return (
    <div className="orderASC">A to Z <br />
      <select className="Select" onChange = {onHandleChange} >
        <option value="all">All </option>
        <option value="asc"> A-Z </option>
        <option value="desc"> Z-A </option>
      </select>
    </div>
  );
};

