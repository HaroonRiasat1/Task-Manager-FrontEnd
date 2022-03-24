import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Registerform(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    const [userType,setUsertype]=useState("")
    const handleEmail=(e)=>{
        setEmail(e.target.value)
        }
        const handlePassword =(e)=>{
            setPassword(e.target.value)
        }
        const handleName =(e)=>{
            setName(e.target.value)
        }
        const handleUsertype=(e)=>{
            setUsertype(e.target.value)
        }



const handleApi =() =>{
    console.log({email,password})
    axios.post("http://localhost:5000/register",{name:name,email:email,password:password,userType:userType}).then(result =>{
    console.log(result)    
    })
    .catch(error =>{
        console.log(error)
    })
}
return(
<div>
<div className="form"> 
     
<label htmlFor="">Registration Form</label>
<input name="Name" value={name} placeholder="Name" onChange={handleName} type="text"/>
<input name="Email" value={email} placeholder="Email" onChange={handleEmail} type="email"/>
<input name="Password" value={password} onChange={handlePassword}  placeholder="Password" type="password"/>
<input name="UserType" value={userType} onChange={handleUsertype}  placeholder="UserType" type="text"/>


<button onClick={handleApi}>Register</button>

 

</div>
<p>Already have an account?<Link to="/"> Login</Link> </p> 
</div>
)


}

export default Registerform;