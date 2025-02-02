import { useState } from 'react'
import './App.css'
import Button from './components/button'

function App() {

const [count,setCount] = useState(0);

function solve(){
  setCount(count+1);
}
  return (
    <div>
      <Button demo={solve} text="Click to see result">
        <h1>{count}</h1>
      </Button>

    </div>
  )
}

export default App
