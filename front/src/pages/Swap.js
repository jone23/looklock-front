import Footer from '../component/Footer';
import './Swap.css';
import React, { useState } from "react";
import {ethers} from "ethers";
import Lolo from "../contracts/Lolo.json";


const Swap = () => {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  const [amounts, setAmmounts] = useState('');

  const onChange = (e) => {
    setAmmounts(e.target.value);
  };

  const handleSwap = async () => {
    try{
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const lolo = new ethers.Contract(contractAddress, Lolo.abi, signer);

      let swapTx = await lolo.swapForTest(amounts);
    }catch {
      console.log("Error while swapping");
    }
    
    
  };

    return (
      <body>
        <div class='swap-container'>
          <div class='swap-graph'>
            <img id="swap-graph-img" src={require('../Assets/swap-graph.png')} alt="Swap-Graph" />
          </div>
          <div class='swap-wrapper'>
            <h1>Swap</h1>
            <div class='to-from-wrapper'>
              <div class='token-wrapper from-wrapper'>
                <div class='swap-txt from-txt'>
                  <span>From</span>
                </div>
                <div class='swap-token'>
                  <div class='from-token'>
                    <span>
                      <img id="swap-from-eth" src={require('../Assets/eth-logo.png')} alt="from-token-img" />
                    </span>
                    <span class='from-token-name'>ETH</span>
                  </div>
                  <div class='amount-input from-amount'>
                    <input fromAmount="fromAmount" placeholder='0' onChange={onChange} value={amounts} type="number"/>
                  </div>
                </div>
              </div>
              <span class="arrow-down"></span>
              <div class='token-wrapper to-wrapper'>
                <div class='swap-txt to-txt'>
                  <span>To</span>
                </div>
                <div class='swap-token'>
                  <div class='to-token'>
                    <span>
                      <img id="swap-to-lolo" src={require('../Assets/lolo-logo.png')} alt="to-token-img" />
                    </span>
                    <span class='to-token-name'>LOLO</span>
                  </div>
                  <div class='amount-input to-amount'>
                    {amounts}
                  </div>
                </div>
              </div>
            
            </div> {/* end of to-from-wrapper */}
            <div class='slippage'>
              <div class='slippage-tolerance'>Slippage Tolerance</div>
              <div calss='slippage-ammount'>0.5%</div>
            </div>
            <button class="purple-gradient-btn" type="button" id="swap-btn" onClick={handleSwap} >
              Swap
            </button>
          </div>  {/* end of swap-wrapper */}
        </div>
        <Footer/>
      </body>
    )
  };
  
  export default Swap;