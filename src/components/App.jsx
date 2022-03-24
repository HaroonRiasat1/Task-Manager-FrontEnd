import Header from "./Header";
import Loginform from "./loginform";

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Registerform from "./registerform";
function App(){
   
    return (

  <div>
       <Header/>

       <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginform />}> </Route>
        <Route path="/Register" element={<Registerform />}>  </Route>
       
     
    </Routes>
  </BrowserRouter>
        
       
       
        </div>
    )
}

export default App;



