import React from "react";

export default function Paginated({theRecipes, recipesPerPage, thePaging}){
    
    const thePagings = [];
    //console.log(thePagings)
    //console.log(recipesPerpage);
    for (let i = 1; i <= Math.ceil(theRecipes/recipesPerPage) ; i++) {
        thePagings.push(i)
    };
    //console.log(thePagings)
    return(
       
        <ul className="itemsPages">
            {thePagings && thePagings.map(number => (
                <span className="pages" key={number}>
                    <button className="btnPage" onClick={() => thePaging(number)}>{number}</button> </span>
            ))}
        </ul>
    );
};

                

           

        

            

                