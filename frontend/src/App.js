
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NewBook from './Pages/AddNew'
import NewUser from './Pages/AddUser'
import Books from './Pages/Books'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import NotFound from './Pages/NotFound'
import Users from './Pages/Users'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ < Layout />}>

<Route index element={ < Home/>}></Route>

<Route path='addBook' element={ < NewBook/>}></Route>

<Route path='addUser' element={ < NewUser />}></Route>

<Route path='books' element={ < Books/>}></Route>

<Route path='dashboard' element={ <  Dashboard/>}></Route>

<Route path='users' element={ < Users/>}></Route>

<Route path='*' element={ < NotFound/>}></Route>

</Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
