import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
 const [cnt,setCount] = useState(0);

  let val =useRef(0);

 function handleClick(){
  val.current=val.current+1;
  console.log("value of val ",val);
  
  setCount(cnt+1);
 }

 //runs on every render
 useEffect(()=>{
  console.log("Rendered");
 })

 let btnRef = useRef();
 function changeColor(){
    btnRef.current.style.backgroundColor ="red";
 }
  return (
    <div>
      <button 
      ref={btnRef}
      onClick={handleClick}>Increment</button> <br />
      <div>Count: {cnt}</div>

      {/* useCase2 (directly access DOm element) */}


      <button onClick={changeColor}>
        change Color of first button
      </button>
      <br />
    
    </div> 
  )
}

export default App
