import React from "react";
import { useState, useEffect } from "react";
import '../App.css'



function Books(){
let allBooks = JSON.parse(localStorage.getItem('Books'))


const handleClick = (e) => {
  e.preventDefault();
console.log(allBooks)
 ;
};
const bookList = []

if(allBooks == null){
  return (<>
      <div>
  <h1>Books</h1>
  
  <h1>There are no books yet</h1>
  
      </div>
      
      </>)
}
return(<><div onClick={handleClick} className="books">

  {allBooks.map(book =><h1>{book}</h1>)}


  </div></>)

}

export default Books


