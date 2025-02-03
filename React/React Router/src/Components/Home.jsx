import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/about')
    }
  return (
    <div>
      Home page<br/>
      <button onClick={handleClick}>Move to about page</button>
    </div>
  )
}

export default Home
