import Footer from "../component/Footer";
import './MyStatus.css';
import PopupDom from "./PopupDom";
import Lockdrop from "./Lockdrop";

import Timer from '../components/Timer';
import BarGraph from '../components/BarGraph';


const MyStatus = () => {
    return (
      <div>
        <div class='mystatus-container'>
          <div class='profile-wrapper'>
            <div class='user-wrapper'>
              <div>
                <img id="profile-img" src={require('../Assets/profile.png')} alt="chain-left"/>
              </div>
              <div id='status-wrapper'>
                <h1>ZELO</h1>
                <div class='phase-container'>
                  <div class='phase-wrapper'>
                    {/* TIMER */}
                    <div id='timer'>
                      <span>
                        PHASE 1
                      </span>
                      <span>
                        TIME LEFT IN THIS PAHSE
                      </span>
                      <div>
                        <Timer/>
                      </div>
                    </div>

                    {/* PHASE 1, 2 */}
                    <div id='phases'>
                      <div>
                        <span>
                          now
                        </span>
                        <span>
                          Phase 1
                        </span>
                        <span>
                          2022.04.01 ~ 04.09
                        </span>
                      </div>
                      <div>
                        <span class='hidden-txt'>
                          now
                        </span>
                        <span>
                          Phase 2
                        </span>
                        <span>
                          2022.04.10 ~ 04.15
                        </span>
                      </div> 
                    </div>
                  </div>
                  <div class='bar-graph'>
                    {/* Bar Graph */}
                    <BarGraph />
                  </div>
                </div>
              </div>
            </div>
            <div class='rewards-wrapper'>
              <div class='rules-container'>
                <h3>Rules</h3>
                <div class='rules-content'>
                  <ul id='rules-header'>
                    <li>project</li>
                    <li>date</li>
                    <li>allocated amount</li>
                    <li>participation rate</li>
                  </ul>
                  <ul id='rules-body'>
                    <li>Alex</li>
                    <li>22.04.01~22.04,09</li>
                    <li>3,000,000,000</li>
                    <li>70%</li>
                  </ul>
                </div>
              </div>
              <div class='rewards-container'>
                <h3>Rewards</h3>
                <div>
                  <img id="reward-img" src={require('../Assets/reward.png')} alt="reward-img"/>
                </div>
              </div>
            </div>
            <div class='lockdrop-popup'>
              <button class="purple-gradient-btn" type="button" id="popupDom">
                Lock Up
              </button>

            </div>
          </div>
         
          <div class='info-wrapper'>
            <div id='info'>
              <h3>Project<br/>Information</h3>
              <p>
              Zelo protocol is web3’s automation network, enabling developers to automate & relay arbitrary smart contract executions on and across all EVM-based compatible
              blockchains such as Ethereum.
              <br/><br/>
              Zelo’s goal is to provide developers with a reliable, scalable & decentralized network to which they can outsource all of their web3 related DevOps operations.
              <br/><br/>
              ► Check out what we’ve been working on at https://zelo.protocol
              <br/><br/>
              Connect with us:
              <br/><br/>
              🐦 Twitter | 💬 Telegram
              </p>
            </div>
            <div id='desclaimer'>
              <h3>Disclaimer</h3>
              <div class='num-paragraph'>
                <span>
                  1
                </span>
                <p>
                  Users who participate in this LockDrop will recieve new token rewards with deposit<br/>
                  when the cliff periods over.
                </p>
              </div>
              <div class='num-paragraph'>
                <span>
                  2
                </span>
                <p>
                  Users need to be registered on LookLock to join the Lockdrop projects.
                </p>
              </div>
              <div class='num-paragraph'>
                <span>
                  3
                </span>
                <p>
                  During the Phase 1 period, no rewards will be generated.
                </p>
              </div>
              <div class='num-paragraph'>
                <span>
                  4
                </span>
                <p>
                  The user hereby confirms that participating in the activity is voluntary, and the<br/>
                  project administration and LookLock has not forced, interfered with, or influenced the<br/>
                  user’s decision in any way.
                </p>
              </div>
            </div>
            <div id='riskwarn'>
              <h3>Risk Warning</h3>
              <p>
              Staking is a risk investment channel. Investors should be sensible in their participation<br/>
              and be aware of investment risks. The project administration and LookLock are not<br/>
              liable for users’ investment gains or losses. The information we provide is for users to<br/>
              conduct their own research. It is not investment advice. The project administration<br/>
              reserves the right of final interpretation of the activity.
              </p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  };
  
  export default MyStatus;