import React from 'react'

export default function Navbar(props) {
  
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h2><strong>Calculator</strong></h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Simplecalci">SimpleCalculator</a>

          
        </li>
        <li>
        {/* <a className="nav-link" href="/">ScientificCalculator</a> */}
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select Calculator
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="Simplecalci.js">Simple Calculator</a></li>
            <li><a className="dropdown-item" href="/">Scientific calculator</a></li>
            
          </ul>
        </li> */}
        <li className="nav-item">
          <a className="nav-link disabled" href="/">Disabled</a>
        </li>
      </ul>
      {/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.fashion} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color : props.fashion==="dark" ? "lime" : "black"}}>{props.theme}</label>
</div> */}
    </div>
  </div>
</nav>
    </div>
  )
}
