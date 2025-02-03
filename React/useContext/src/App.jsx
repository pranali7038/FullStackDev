import { useState } from 'react';
import ChildA from './components/childA';
import './App.css'
import { createContext } from 'react';


//create context
const UserContext = createContext();

//wrap all the child inside a provider

//pass value
//consume value inside consumer

function App() {
const[user,setUser]=useState({name:"Pranali"});
  return (
    <div>
      <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider>
      
    </div>
  )
}

export default App
export {UserContext};
