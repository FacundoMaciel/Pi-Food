import React from "react";
import "./Paginated.css"
import { TbArrowBigRight } from 'react-icons/tb';
import { TbArrowBigLeft } from 'react-icons/tb';

export default function Paginated({theRecipes, recipesPerPage, thePaging,paginated, nextPage, previousPage}){
    
    const thePagings = [];

    for (let i = 1; i <= Math.ceil(theRecipes/recipesPerPage) ; i++) {
        thePagings.push(i)
    };
    
    // const handleClick = (number)=>{
    //     thePaging(number)
    // }
    return (
        <div className="itemsPages">
            <button className="arrowPage"disabled={paginated === 1} onClick={()=>previousPage()}> <TbArrowBigLeft/> </button>
            <h5>{paginated}</h5>
            <button className="arrowPage"disabled={paginated === 10} onClick={()=>nextPage()}><TbArrowBigRight/> </button>
        </div>
    );
};


            
            
                    


           

        

            

                