
import './App.css'

function App() {
 
  function click(){
    alert("you have clicked Button")
  }

  function mouse(){
    alert("Mouse over called")
  }

  

  return (
    <div>
      <button onClick={click}>
        click me
      </button>
      <br/><br/>
      <p onMouseOver={mouse}>Hover on Me to see result</p>
    </div>

  )
}

export default App
