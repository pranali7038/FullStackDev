import Card from './component/card'
import './App.css'
import Button from './component/button'
import { useState } from 'react'

function App() {
  
  const [count,setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
    <div>

      {/* passing props as a function */}
      <Button incrementCount ={handleClick}
      text="click me">
        <h1>{count}</h1>
      </Button>


      {/* pssing props as children */}
     {/* <Card name="Pranali Jahagirdar">
      <h1>practice DSA and CP</h1>
      <p>Always on top</p>
      <p>Lets goooo!!</p>
     </Card>
     <Card children="hey">
        This is other card component.(This will overwrite)
     </Card> */}
    </div>
  )
}

export default App
