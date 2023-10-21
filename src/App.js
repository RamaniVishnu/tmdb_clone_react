import logo from './logo.svg';
import './App.css';
import PopularShows from './components/Products/PopularShows';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useOnline } from './utils/useOnline';
import SampleData from './SampleData';

function App() {
  const [val,setVal] = useState("Ramani");

  const online = useOnline();
  useEffect(()=>{
    // console.log("Rammmmm");
  },[val])
  return (
    <div className="App">
    {/* <input type="text" placeholder="enter" value={val} onChange={(e)=>setVal(e.target.value)} />
    <h1>{val}</h1> */}
    {/* <SampleData />  //this has async data in it */}
    {/* <SampleData /> */}
    <Header />
      <PopularShows />
    <Footer />
    </div>
  );
}

export default App;
