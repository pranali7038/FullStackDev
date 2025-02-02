
import { useState } from 'react';
import './App.css';
import Card from './components/card';

function App() {
 
 const [name,setName] = useState("");

  return (
    <div>
      <Card name={name} setName={setName}/>
      <p>Parent Component,name is {name}</p>
    </div>
  )
}

export default App
