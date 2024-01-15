import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../App.css'

const Layout = () => {

    return (<>
    <div className="Layout">
    <div className="header">
    <header>
       Mzansi Book Sharing
    </header>
    </div>
<div className="nav">
    <nav>
        <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
            <Link to='/Books'>Books</Link>
        </li>
        <li>
            <Link to='/Users'>Book Lovers</Link>
        </li>
        <li>
            <Link to='/AddBook'>Share New Book</Link>
        </li>
        <li>
            <Link to='/AddUser'>Join</Link>
        </li>

        </ul>
    </nav>
   <div className="content"><Outlet /></div> 
</div>
<div className="footer">
<footer>
    All rights reserved. 2024
</footer>
</div></div>
    </>)
}

export default Layout;