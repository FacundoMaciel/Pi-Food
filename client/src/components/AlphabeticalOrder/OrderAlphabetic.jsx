import React from "react";
import { useDispatch } from "react-redux";
import { OrderAlphabetic } from "../../actions";
import "./OrderAlphabetic.css"


export function OrderAlphabeticFunction(){
    const dispatch =  useDispatch();

    function onHandleChange(e){
      dispatch(OrderAlphabetic(e.target.value))
    };
  return (
    <div className="orderASC">
      <select className="Select" onChange = {onHandleChange} >
        <option value="all"> Alphabetic </option>
        <option value="asc"> A-Z </option>
        <option value="desc"> Z-A </option>
      </select>
    </div>
  );
};

// export class OrderAlphabeticFunction extends Component{
    

//     render(){
//         return(
//             <div className="orderASC">
//                 <select onChange={() => OrderAlphabetic()} >
//                 <option value="asc"> A-Z </option>
//                 <option value="desc"> Z-A </option>
//                 </select>
//             </div>
//         );
//     };
// };

// function mapStateToProps(state) {
//     return {
//       recipes: state.recipes,
//     };
//   };
  
//   function mapDispatchToProps(dispatch) {
//     return {
//       Order: name => dispatch(OrderAlphabetic(name)),
//     };
//   };
  
//   export default connect(mapStateToProps, mapDispatchToProps)(OrderAlphabeticFunction);