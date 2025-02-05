import { useState } from 'react'
import Child from './components/child'
import './App.css'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(()=>{
        setCount(count+1);
  },[count]);
  
  return (
    <div>
      <div>Counter:{count}</div>

      <button onClick={handleClick}>Increment</button>
      <br /><br />

      <div>
        <Child 
        btnName="Click Me"
        handleClick={handleClick}
        />
      </div>
    </div>
  )
}

export default App
