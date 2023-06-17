import './App.css';
import Navbar from './components/Navbar';
import Bgimg from './components/Bgimg';
// import { useState } from 'react';
import Simplecalci from './components/Simplecalci';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"

function App() {
//   const [mode,setMode]=useState("light");

// const [modeBt,setmodeBt]=useState("Enable Dark Mode");
//   const toggleMode=()=>{
//     if(mode==="light"){
//       setMode("dark");
//       document.body.style.background="Midnightblue";
//       setmodeBt("Enable Light Mode");
//     }
//     else{
//       setMode("light");
//       document.body.style.background="burlywood";
//       setmodeBt("Enable Dark Mode");
     
//     }
//   }
  return (
    <div className="App">
     <Navbar/>
     <BrowserRouter>
       <Routes>
       <Route path="" element={<Bgimg/>}></Route>
       <Route path="/Simplecalci" element={<Simplecalci/>}></Route>
       
  
       </Routes>
       </BrowserRouter>
     
    </div>
  );
}

export default App;
