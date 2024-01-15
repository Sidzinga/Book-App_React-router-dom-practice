import React, { useState } from 'react';
import '../App.css'

let users = []

function NewUser (){
  
  
  
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setFormData(values => ({...values,
      [name]: value,
    }));
    
  };

  const handleClick = (e) => {
    e.preventDefault();
  
   
   users.push(formData.firstName + " " + formData.lastName  + " " + formData.email )
   localStorage.setItem('Users',JSON.stringify(users) )

//  console.log( users +'  users')
   ;
  };


  return (<><header><h1>Join To Read And Share Books</h1></header>
    <form id ="form">
      <div id = 'info'><div>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label><br/>
      </div><br/>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label><br/>
      </div><br/>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label><br/><br/>
        <button type="submit" onClick = {handleClick}>Submit</button>
      </div>
      </div>
    </form>


 
</>
  );
};
export default NewUser;
