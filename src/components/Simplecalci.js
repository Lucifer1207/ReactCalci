import React, { useState } from 'react'
import './Simplecalci.css';


export default function Simplecalci() {

    const [calc,setCalc]=useState("");
    const [res,setRes]=useState("");

    const ops=['/','*','+','-','.'];

    const updateCalc= value =>{
        if(
            ops.includes(value) && calc === '' || 
            ops.includes(value) && ops.includes(calc.slice(-1))
        ){
            return ;
        }
        setCalc(calc+value);

        if(!ops.includes(value)){
            setRes(eval(calc+value).toString());
        }
    }
    const clear=()=>{
      setCalc("");
    }

const createDigits = () => {
    const digits=[];
    for(let i=0;i<10;i++){
        digits.push(
            <button onClick={()=> updateCalc(i.toString())} key={i}>
                            {i}
            </button>
        )
    }

    return digits;
}


  const calculate=()=>{
    setCalc(eval(calc).toString());
  }

  const del=()=>{
    if(calc==''){
        return;
    }
    const value=calc.slice(0,-1);
    setCalc(value);
  }

  return (
    <div>
      <div className="app">
        <div className="calci">
            <div className="display">
                {/* {res ? <span>({res})</span> :''} */}
                 {calc || "0"}
            </div>
            <div className="operators">
                <button onClick={clear}>CLR</button>
                <button onClick={()=> updateCalc('/')}>/</button>
                <button onClick={()=> updateCalc('*')}>*</button>
                <button onClick={()=> updateCalc('+')}>+</button>
                <button onClick={()=> updateCalc('-')}>-</button>
                <button onClick={del}>DEL</button>
            </div>
            <div className="digits">
                { createDigits() }
                 <button onClick={()=> updateCalc('0')}>0</button>
                 <button onClick={()=> updateCalc('.')}>.</button>
                 
            </div>
            <button className="equal" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}
