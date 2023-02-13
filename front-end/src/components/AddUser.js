import React, {useState} from "react";

const AddUser =()=>{
    const [username, setUsername]=useState("");
    const [age, setAge]=useState("");
    const collectData= async()=>{
        console.warn(username, age);
        let result = await fetch('http://localhost:8000/adduser',{
            method:'post',
            body: JSON.stringify({username, age}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("movie",JSON.stringify(result))
        Navigate('/')
    }
    return(
        <div className="adduser">
            <h1>Add User</h1>
            <input className="inputBox" type="text"
            value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Username" />
            <input className="inputBox" type="number"
            value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age" />
            <button onClick={collectData} className="appButton" type="button">Submit</button>
        </div>
    )
}

export default AddUser;