import React from 'react';

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
        <div>
            {/* Left Side - Logo */}
            <div>Logo</div>

            {/* Right Side - Sections and Connect */}
            <div>PROJECT</div>
            <div>SWAP</div>
            <div>MY STATUS</div>
            <div>GOVERNANCE</div>
        
            {/* Connect */}
            {isConnected ? (
                <p>Connect Wallet</p>
            ) : (
                <button onClick={connectAccount}>Connect Wallet</button>
            )}
        </div>
    )
}

export default NavBar