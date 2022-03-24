import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {useState} from 'react';


function Loginform(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    

    const handleEmail=(e)=>{
        setEmail(e.target.value)
        }
        const handlePassword =(e)=>{
            setPassword(e.target.value)
        }
const handleApi =() =>{
    console.log({email,password})
    axios.post("http://localhost:5000/login",{email:email,password:password}).then(result =>{
    console.log(result)    
    })
    .catch(error =>{
        console.log(error)
    })
}
return(
<div> 
<div className="form"> 
     


<input name="Email" value={email} placeholder="Email" onChange={handleEmail} type="email"/>
<input name="Password" value={password} onChange={handlePassword}  placeholder="Password" type="password"/>
<button onClick={handleApi}>Login</button>



</div>
<p>Don't have an account?<Link to="/Register"> Register</Link> </p> 
</div>
)


}

export default Loginform;