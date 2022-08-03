import './App.css';
import { useState } from 'react';
import NavBar from './NavBar';
import Admin from './Admin';
import About from './About';

function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <div className="App">
      <NavBar accounts={accounts} setAccounts={setAccounts}></NavBar>
    </div>
  );
}

export default App;
