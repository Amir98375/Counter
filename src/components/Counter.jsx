import { useEffect, useState } from "react"
import styled from 'styled-components'
import './c.css';
export const Counter = () =>{
    // const [count,setCount] = useState(1)
    const [time,setTime] = useState(0);
    const [toggle,setToggle] = useState(0);
    const [min,setMin] = useState(0);
    const [sec,setSec] = useState(0);
    const [mili,setMili] = useState(0);
    const [inStart,setIn] = useState(false);
    const [inPause,setPause] = useState(true);
    
useEffect(()=>{
    let interval=null;
    if(inStart && !inPause){
        interval = setInterval(() => {
            setSec((c)=>c+1)
        }, 10);
    }
    else{
        clearInterval(interval);
    }
    return () => {
        clearInterval(interval);
      };

},[inStart,inPause])
     
const StartButton = ()=>{
    setIn(true);
    setPause(false);
}
const handlePause = () => {
    setIn(false);
    setPause(true);
}
if(sec>=60){
    setSec(0)
    setMin((c)=>c+1)
}
if(min>=60){
    setMin(0)
    setTime((c)=>c+1)
}
if(time>=12){
    setSec(0)
    setMin(0)
    setTime(0);
}
const handleReset =()=>{
    setTime(0);
    setMin(0)
    setSec(0)
    setIn(false);
    setPause(true);
    
}
// console.log(time)

    return (
    <>
    
    <div className="main">
            <div>{time}</div>
            <div>{min}</div>
            <div>{sec}</div>
        </div>
        {!inStart? <button onClick={StartButton}  className="btn-primary">Start</button>
        :""}

        {
        inPause?
        <button onClick={StartButton} className="btn-primary">Resume</button>:<button onClick={handlePause} className="btn-primary">Pause</button>
        }
       


        
        {/* <button className="btn-primary">Resume</button> */}
        <button onClick={handleReset} className="btn-primary">reset</button>
    </>
    )
}