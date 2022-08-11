import Footer from '../component/Footer';
import './Swap.css';
import React, { useState } from "react";

const Swap = () => {
  const [inputs, setInputs] = useState('');

  const {fromAmount, toAmount} = inputs;

  const onChange = (e) => {
    const {fromAmount, value} = e.target;
  
    setInputs(e.target.value);
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
                    <input fromAmount="fromAmount" placeholder='0' onChange={onChange} value={fromAmount} type="number"/>
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
                    <h1>{fromAmount}</h1>
                  </div>
                </div>
              </div>
            </div>
            
            <button class="purple-gradient-btn" type="button" id="swap-btn">
              Swap
            </button>


          </div>
        </div>
        <Footer/>
      </body>
    )
  };
  
  export default Swap;