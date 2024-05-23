
import "./App.css";
import { useEffect, useState } from "react";


function App() {
  const [count,setCount] = useState (0) 
    const levelup = () => {
      const audio = new Audio('mario-1up.mp3');
      audio.play();
      console.log('leveled up!');
  }
  return (
    <>
    <div>
      <p>i fucked ur mom {count} times :)</p>
      <button onClick={( )=> setCount(count+1)}> click here </button>
    </div>
    <div>
      <img 
      src="mushroom.png"
      style={{ cursor : 'pointer' }}
      onClick={levelup}
     />
    </div>
    <div>
      <button onClick={()=> alert("ur'e a faggot")} > click here for a surprise  </button>
    </div>
      </>
    
  )
}
export default App;
