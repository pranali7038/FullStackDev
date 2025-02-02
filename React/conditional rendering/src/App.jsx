
import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  
  const[isLoggedIn,setloggedIn] = useState(false);

    //1.using if-else
    // if(isLoggedIn){
    //   return (
    //     <LogoutBtn/>
    //   )
    // }else{
    //   return(
    //     <LoginBtn/>
    //   )
    // }

    //2.using ternary operator
    // return(

    //   (isLoggedIn)?<LogoutBtn/>:<LoginBtn/>
    // )


    //3.using logical operator
    // return(
    //   <div>
    //     <h1>Welcome</h1>
    //     {isLoggedIn && <LogoutBtn/>}
    //   </div>
    // )

    //4.Early return

    if(!isLoggedIn){
        return(
          <LoginBtn/>
        )
    }
}

export default App
