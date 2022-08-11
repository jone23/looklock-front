import Footer from '../component/Footer';
import React, { Component } from 'react';

const Lockdrop = () => {
    // DB 연동 필요한 부분: Duration & Rewards
    return(
        <div class='lockdrop-container'>
            <h3>Lockdrop</h3>
            <div class='lockdrop-amount'>
                <span>
                    Amount
                </span>
                <span>
                    In wallet: 900
                </span>
            </div>
            <div class='lockdrop-days'>
                <span>Duration (Days)</span>
                <form name="selectDays">
                    <ul>
                        <li>
                            <label><input type="checkbox"/>30</label>
                        </li>
                        <li>
                            <label><input type="checkbox"/>60</label>
                        </li>
                        <li>
                            <label><input type="checkbox"/>90</label>
                        </li>
                    </ul>
                </form>
            </div>
            <div class='lockdrop-rewards'>
                <span>Est Lockdrop Rewards</span>
                <span>150</span> 
                <span>USD</span>

                <span>Est & of Rewards</span>
                <span>0.70</span>
                <span>%</span>
                
            </div>
            <div class='lockdrop-btn'>
                <button class="purple-gradient-btn" type="button" id="LockdropPopup">
                    Lockdrop
                    <div class='lockdrop-success'>
                    </div>
                </button>

                
            </div>
        </div>
    );
}
 
export default Lockdrop;