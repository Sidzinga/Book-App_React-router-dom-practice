import '../App.css'
import React from 'react'

function Dashboard(){



let books = JSON.parse(localStorage.getItem('Books'))
let users = JSON.parse(localStorage.getItem('Users'))




const handleClick = (e) => {
    e.preventDefault();
  
console.log(books.length)

}
  return (<><div className="dash" onClick={handleClick}><h1 >Dashboard</h1></div>
  <div><h2>There are {books.length} books in the shared library</h2></div><br/>
  <br/>
  <h2>There are {users.length} book lovers in our community</h2>
  
  </>)
}


export default Dashboard