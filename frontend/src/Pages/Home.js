import { Outlet, Link } from "react-router-dom";

const Home = () =>{


    return(
<><div className="homePage">
        <ul>
        
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

        </ul> </div>
        </>
    )
}
export default Home