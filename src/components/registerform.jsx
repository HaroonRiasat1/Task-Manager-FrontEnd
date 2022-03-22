import React from "react";
import { Link } from "react-router-dom";

function registerform(){
return(

<div> 
     
<form>
<input name="Name" placeholder="Name" type="text"/>
<input name="Email" placeholder="Email" type="email"/>
<input name="Password" placeholder="Password" type="password"/>
<input name="AccoutType" placeholder="AccountType" type="texts"/>

<button>Register</button>
</form>



<p>Already have an account?<Link to="/"> Login</Link> </p>
</div>

)


}

export default registerform;