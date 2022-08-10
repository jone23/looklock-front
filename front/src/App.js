import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import NavBar from "./component/NavBar";
import Main from "./pages/Main";
import NoPage from "./pages/NoPage";

import Project from './pages/Project';
import Swap from './pages/Swap';
import MyStatus from './pages/MyStatus';
import Governance from './pages/Governance';
import About from './pages/About';
import Admin from './pages/Admin';
import Register from './pages/Register';
import Memo from "./components/Memo";

export default function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar accounts={accounts} setAccounts={setAccounts}></NavBar>}>
            <Route index element={<Main />} />
            <Route path="project" element={<Project />} />
            <Route path="swap" element={<Swap />} />
            <Route path="about" element={<About accounts={accounts} setAccounts={setAccounts}></About>} />
            <Route path="admin" element={<Admin accounts={accounts} setAccounts={setAccounts}></Admin>} />
            <Route path="mystatus" element={<MyStatus />} />
            <Route path="governance" element={<Governance />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
