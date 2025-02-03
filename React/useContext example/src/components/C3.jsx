import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const C3 = () => {
    const {theme,setTheme} = useContext(ThemeContext);
    function handleclick(){
        if(theme =='light'){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }
  return (
    <div>
      <button onClick={handleclick}>
        Change Theme
      </button>
    </div>
  )
}

export default C3
