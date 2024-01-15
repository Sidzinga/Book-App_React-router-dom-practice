

import React, { useState } from 'react';
import '../App.css'

let books = []
function NewBook() {
    
  const [book, setBook] = useState({});
    const handleChange = (e) => {
      e.preventDefault()
      const { name, value } = e.target;
      setBook(values => ({...values,
        [name]: value,
      }));
      
    };
  
    const handleClick = (e) => {
      e.preventDefault();

books.push(book.Author + " " + book.Title)
     localStorage.setItem('Books', JSON.stringify(books));

     ;
    };
  
  
    return (<><header><h1>Share A New Book With US</h1></header>
      <form  id ="form">
        <div id = 'data'><div>
          <label>
            Book Title:
            <input
              type="text"
              name="Title"
              value={book.title}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Author:
            <input
              type="text"
              name="Author"
              value={book.author}
              onChange={handleChange}
              required
            />
          </label>
        </div>
       
          <button type="submit" onClick = {handleClick}>Add Book</button>
        </div>
       
      </form>
  
  
   
  </>
    );
  };


export default NewBook;
