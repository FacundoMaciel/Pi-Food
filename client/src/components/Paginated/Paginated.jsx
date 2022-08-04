import React from "react";
import "./Paginated.css"

export default function Paginated({theRecipes, recipesPerPage, thePaging, nextPage, previousPage}){
    
    const thePagings = [];

    for (let i = 1; i <= Math.ceil(theRecipes/recipesPerPage) ; i++) {
        thePagings.push(i)
    };
    
    const handleClick = (number)=>{
        thePaging(number)
    }
    return (

        <div className="itemsPages">
            {thePagings && thePagings.map(number => (
                <button className="btnPage" onClick={() => handleClick(number)}>{number}</button>
                ))}
            
            <button className="arrowPage" onClick={()=>previousPage()}> ⇜ </button>
            <button className="arrowPage" onClick={()=>nextPage()}> ⇝ </button>
            
        </div>


    );
};
                    


           

        

            

                