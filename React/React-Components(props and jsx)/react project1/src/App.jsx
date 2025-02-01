import './App.css'
import UserCard from './components/UserCard'
import pic from "./assets/img2.jpg";
import pic1 from "./assets/img3.jpg";
import pic2 from "./assets/img4.jpg";


function App() {
  

  return (
    <div className='container'>
      <UserCard name="Pranali Jahagirdar"desc="This id description of pranali Jahagirdar" img={pic}/>
      <UserCard name="Prasad jahagirdar" desc="This id description of Prasad Jahagirdar" img={pic1}/>
      <UserCard name="Deepak Jahagirdar" desc="This id description of Deepak Jahagirdar" img={pic2}/>
    </div>
  )
}

export default App
