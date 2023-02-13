import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import { Link } from "react-router-dom";
import AddMovie from "./AddMovie";
import UpdateMovie from "./UpdateMovie";
import DeleteMovie from "./DeleteMovie";
const Details =()=>{
    
    return(
        <div className="details">
            <h1>Movie Details</h1>
            <ul>
            <li><Link to="/details/addmovie"><button className="appDetails" type="button">Add Movie</button></Link></li>
            <li><Link to="/details/updatemovie"><button className="appDetails" type="button">Update Movie</button></Link></li>
            <li><Link to="/details/deletemovie"><button className="appDetails" type="button">Delete Movie</button></Link></li>
            </ul>
        </div>
    )
}

export default Details;