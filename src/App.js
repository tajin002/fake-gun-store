import { useState } from 'react';
import './App.css';
import DisplayAllGun from './component/DisplayAllGun/DisplayAllGun';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)
  const countIncrease = () => {
    const newCount = count + 1;
    setCount(newCount)
  }
  return (
    <div className="App">
      <Navbar count = {count} />
      <DisplayAllGun countIncrease = {countIncrease} />
      <Footer></Footer>
    </div>
  );
}

export default App;