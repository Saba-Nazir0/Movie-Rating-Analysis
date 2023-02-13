import React from "react";
import { Link } from "react-router-dom";

const Nav=()=>{
    return(
        <div>
            <ul className="nav-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/details">Movie Details</Link></li>
                <li><Link to="/add">Add User</Link></li>
                <li><Link to="/rating">Provide Rating</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                
            </ul>
        </div>
    )
}

export default Nav;