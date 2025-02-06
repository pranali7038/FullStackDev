import { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [cnt, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside expensive task");
    let result = num * 2;
    for (let i = 0; i <= 1000; i++) {
      result += 0; // Simulating a heavy computation
    }
    return result;
  }

  const doubleVal = useMemo(() => expensiveTask(input), [input]);

  return (
    <div>
      <button onClick={() => setCount(cnt + 1)}>Increment</button>

      <div>
        Count: {cnt}
      </div>

      <input
        type="number"
        placeholder="Enter number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))} // Convert string to number
      />
      
      <div>
        Double: {doubleVal}
      </div>
    </div>
  );
}

export default App;
