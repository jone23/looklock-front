import Footer from "../component/Footer";
import './MyStatus.css';

const MyStatus = () => {
    constructor(props) {
      super(props);
        
        this.state = {
            isOpenPopup: false,
        }
 
        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    const openPopup = () => {
      this.setState({
          isOpenPopup: true,
      })
    } 

    const closePopup = () => {
        this.setState({
            isOpenPopup: false,
        })
    }

    return (
      <body>
        <div class='mystatus-container'>
          <div>
            <img id="profile-img" src={require('../assets/profile.png')} alt="chain-left"/>
          </div>
          <div class='status-wrapper'>
            <h1>ZELO</h1>
            <div class='phase-wrapper'>
              <div>
                {/* TIMER */}
                <div id='timer'>
                  <span>
                    PHASE 1
                  </span>
                  <span>
                    TIME LEFT IN THIS PAHSE
                  </span>
                  <div>
                    TIMER HERE
                  </div>
                </div>

                {/* PHASE 1, 2 */}
                <div id='phases'> 
                  <span>
                    Phase 1
                  </span>
                  <span>
                    2022.04.01 ~ 04.09
                  </span>
                  <span>
                    Phase 2
                  </span>
                  <span>
                    2022.04.10 ~ 04.15
                  </span>
                </div>
              </div>
              <div>
                {/* Bar Graph */}
                BAR GRAPH HERE
              </div>
            </div>
          </div>
          <div class='rewards-wrapper'>
            <div>
              <h3>Rules</h3>
              <ul id='reward-header'>
                <li>project</li>
                <li>date</li>
                <li>allocated amount</li>
                <li>participation rate</li>
              </ul>
              <ul id='reward-content'>
                <li>Alex</li>
                <li>22.04.01~22.04,09</li>
                <li>3,000,000,000</li>
                <li>70%</li>
              </ul>
            </div>
            <div>
              <h3>Rewards</h3>
              <div>
                <img id="reward-img" src={require('../assets/reward.png')} alt="reward-img"/>
              </div>
            </div>
          </div>
          <div class='lockdrop-popup'>
            <button class="purple-gradient-btn" type="button" id="popupDom" onClick={openPopup}>
              Lock Up
            </button>
            {state.isOpenPopup &&
              <PopupDom>
                <Lockdrop onClose={closePopup}/>
              </PopupDom>
            }
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
      </body>
    )
  };
  
  export default MyStatus;