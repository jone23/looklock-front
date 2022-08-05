import {useState} from 'react';

const Admin = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    // async function connectAccount(){
    //     if (window.ethereum) {
    //         const accounts = await window.ethereum.request({
    //             method: "eth_requestAccounts",
    //         });
    //         setAccounts(accounts);
    //     }
    // }

    return (
        <div class = 'About'>
            <div>About us</div>     
            <div>Look and Lock. Your chances are all here. </div>

        </div>
        
    )
}