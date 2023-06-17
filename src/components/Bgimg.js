import React from 'react'

export default function Bgimg() {
  const myStyle={
       
 
    height:'100vh',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
return (
<div className='div' style={myStyle}>
    <div className='x'><div className='h'><h1>Welcome to My App.<br></br>Here I provide Two different types of Calculator <br /> <br /> <h4>(namely SimpleCalculator AND Scientific Calculator)</h4>  </h1></div></div>
 <div className='xyz'><a className='a' href="/Simplecalci"><button className='btn btn-secondary xy'>Get Started</button></a></div>
</div>
)
}
