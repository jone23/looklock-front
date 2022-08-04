import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './NavBar.css';

const NavBar = ({ accounts, setAccounts }) => {

    const isConnected = Boolean(accounts[0]);

    async function connectAccount(){
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <>
        <nav id="navbar">
            {/* Left Side - Logo */}
            <div class='logo'>
                <Link to="/">
                    <img src={require("../assets/header-logo.png")} alt="Looklock logo"/>
                </Link>
            </div>

            {/* Right Side - Sections and Connect */}
            <div class='gnb-box'>
                <ul id="links">
                    <li>
                        <Link to="/project">PROJECT</Link>
                    </li>
                    <li>
                        <Link to="/swap">SWAP</Link>
                    </li>
                    <li>
                        <Link to="/mystatus">MY STATUS</Link>
                    </li>
                    <li>
                        <Link to="/governance">GOVERNANCE</Link>
                    </li>
                </ul>
                {/* Connect */}
                {isConnected ? (
                    <div class="wallet">
                        <p>Wallet Connected</p>
                    </div>
                ) : (
                    <div class="wallet">
                        <button class="wallet-btn" onClick={connectAccount}>Connect Wallet</button>
                    </div>
                )}
            </div>
        </nav>
        <Outlet/>
        </>
    )
};

export default NavBar;