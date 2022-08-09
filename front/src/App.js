import './App.css';
import { useState } from 'react';
import NavBar from './NavBar';
import Admin from './Admin';
import About from './About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Memo from "./components/Memo";
import TestButton from "./components/TestButton";

function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <div className="App">
      <NavBar accounts={accounts} setAccounts={setAccounts}></NavBar>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestButton />}></Route>
          <Route path="/memo" element= {<Memo />}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
