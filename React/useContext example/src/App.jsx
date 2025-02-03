import C1 from './components/C1'
import './App.css'
import { useState } from 'react'
import { createContext } from 'react';

const ThemeContext = createContext();
function App() {
 
  const [theme,setTheme] = useState('light');
  return (
    <div> 
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div id='Container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
        <C1/>
        </div>
         
      </ThemeContext.Provider>
      
    </div>  
  )
}

export default App
export {ThemeContext}
