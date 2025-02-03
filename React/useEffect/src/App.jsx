
import { useEffect, useState } from 'react'
import './App.css'
import { use } from 'react';

function App() {
  const [cnt,setCnt]=useState(0);
  const [total,setTotal]=useState(1);
  //variation 1(runs on every ren
  // der)
  // useEffect(()=>{
  //   alert('clicked')
  // },[])

  //vartion 2->runs on every first render

  // useEffect(()=>{
  //     alert("Runs on evrey first render");
  // },[])

  //variation 3->runs when dependancy value gets updated
  // useEffect(()=>{
  //   alert("Dependent on dependency");
  // },cnt);


  //variation 4->multiple dependancies

  // useEffect(()=>{
  //   alert("count/total value gets updated");
  // },[total,cnt])

  function handleClick(){
    setCnt(cnt+1);
  }

  function handleUpdateClick(){
    setTotal(total+1);
  }

  //variation 5 -> with cleanup function

  useEffect(()=>{
    alert("UI Mounted");

    return()=>{
      alert("UI Unmounted");
    }
  },[cnt])
  return (
    <div>
     <button onClick={handleClick}>Click me</button><br />
     Count is:{cnt}<br/>

     <button onClick={handleUpdateClick}>update</button><br />
     Total is{total}
    </div>  )
}

export default App
