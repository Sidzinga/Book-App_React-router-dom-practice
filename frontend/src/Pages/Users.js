import React, { useState } from 'react';
import '../App.css'

 
export function Users(){



let users = JSON.parse(localStorage.getItem('Users'))


console.log(users + " users")

if(users == null){
    return (<>
        <div>
    <h1>Users</h1>
    
    <h1>There are no users</h1>
    
        </div>
        
        </>)
}
else {
    return (<>
    <div>
<h1>Users</h1>

<h1>{users.map(user =><p>{user}</p>)}</h1>

    </div>
    
    </>)
}

    
}
 
 export default Users