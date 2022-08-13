import Footer from "../component/Footer";
import './ProjectDetail.css';
import Timer from '../components/Timer';
import BarGraph from '../components/BarGraph'; 

const ProjectDetail = () => {
    return (
        <body>
            <div id='project-detail-wrapper'>
                <div id='zelo-wrapper'>
                    <div id='project-name'>
                        <div>
                            <img id="zelo-img" src={require('../Assets/profile.png')} alt="chain-left"/>
                        </div>
                        <h1>ZELO</h1>
                        <div>
                            <button id='phase1-btn'>Phase 1</button>
                            {/* <div id='phase1-btn-blur'></div> */}
                        </div>
                    </div>
                    <div id='period-box'>
                        <div id='period-left'>
                            <ul>
                                <li>lockdrop apply period</li>
                                <li>lock period</li>
                                <li>allocated amount</li>
                            </ul>
                        </div>
                        <div id='period-right'>
                            <ul>
                                <li>
                                    <div id='period-phase1'>
                                        <span>Phase 1</span>
                                        <span>2022.04.01 ~ 04.09.</span>
                                        <div class='dotnow'>
                                            <span class='dot'></span>
                                            <span class='now'>now</span>
                                        </div>
                                    </div>
                                    <div id='period-phase2' class='notyet'>
                                        <span>Phase 2</span>
                                        <span>2022.04.10 ~ 05.15.</span>
                                        <div class='dotnow'>
                                            <span class='dot hidden'></span>
                                            <span class='now hidden-txt'>now</span>
                                        </div>
                                    </div>
                                </li>
                                <li>30 / 60 / 90 / 120 days</li>
                                <li>3,000,000,000</li>
                            </ul>
                        </div>
                    </div>
                    <div id='participation-rate'>
                        <h3>Participation Rate per Days</h3>
                        <div class='outer-box'>
                            <div class='inner-box'>
                                <div class='inner-header'>
                                    <span class='part-day'>30</span>
                                    <span>days</span>  
                                </div>
                                <div class='progress-bar'>
                                    
                                </div>
                                <div class='inner-footer'>
                                    <span>700,000/100,000,000</span>
                                    <span>70%</span>
                                </div>
                            </div>
                            <div class='inner-box'>
                                <div class='inner-header'>
                                    <span class='part-day'>60</span>
                                    <span>days</span>  
                                </div>
                                <div class='progress-bar'>
                                    
                                </div>
                                <div class='inner-footer'>
                                    <span>700,000/100,000,000</span>
                                    <span>70%</span>
                                </div>
                            </div>
                        </div>
                        <div class='outer-box'>
                            <div class='inner-box'>
                                <div class='inner-header'>
                                    <span class='part-day'>90</span>
                                    <span>days</span>  
                                </div>
                                <div class='progress-bar'>
                                    
                                </div>
                                <div class='inner-footer'>
                                    <span>700,000/100,000,000</span>
                                    <span>70%</span>
                                </div>
                            </div>
                            <div class='inner-box'>
                                <div class='inner-header'>
                                    <span class='part-day'>120</span>
                                    <span>days</span>  
                                </div>
                                <div class='progress-bar'>
                                   
                                </div>
                                <div class='inner-footer'>
                                    <span>700,000/100,000,000</span>
                                    <span>70%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='reward-wrapper'>
                        <h3>Rewards</h3>
                        <div id='reward-box'>
                            <div id='reward-header'>
                                <span>Days</span>
                                <span>Multiplier</span>
                            </div>
                            <div id='reward-body'>
                                <div class='vertical 1of4'>
                                    <span class='reward-days'>30</span>
                                    <span class='reward-multi'>1x</span>
                                </div>
                                <div class='vertical 2of4'>
                                    <span class='reward-days'>30</span>
                                    <span class='reward-multi'>1x</span>
                                </div>
                                <div class='vertical 3of4'>
                                    <span class='reward-days'>30</span>
                                    <span class='reward-multi'>1x</span>
                                </div>
                                <div class='vertical 4of4'>
                                    <span class='reward-days'>30</span>
                                    <span class='reward-multi'>1x</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='lockup-wrapper'>
                    <div id='lockup-container'>
                        <div id='timer-wrapper'>
                            <Timer/>
                            <div>
                                <span id='phase1'>PHASE 1</span>
                                <span id='timeleft'>TIME LEFT IN THIS PHASE</span>
                            </div>
                        </div>
                        <span id='horizontal-line'>
                        </span>
                        <div id='lock-info-wrapper'>
                            <div id='amount-container'>
                                <div id='amount-text'>
                                    <span>Amount</span>
                                    <div>
                                        <span>In wallet: </span>
                                        <span>900</span>
                                    </div>
                                </div>
                                <div id='amount-input-container'>
                                    <span>LOLO</span>
                                    <div class='flex-right'>
                                        <input type='text' name='amount-area' value='700' id='amount-input-area'></input>
                                        <span>MAX</span>
                                    </div>
                                </div>
                                <span>Minimum Amount 000</span>
                            </div>
                            <div id='duration-container'>
                                <span>Duration (days)</span>
                                <div id='duration-btn-container'>
                                    <button class='duration-btn btnselected'>30</button>
                                    <button class='duration-btn'>60</button>
                                    <button class='duration-btn'>90</button>
                                    <button class='duration-btn'>120</button>
                                </div>
                            </div>
                            <div id='est-container'>
                                <div class='flex'>
                                    <span>Est Lockdrop Rewards</span>
                                    <div>
                                        <span id='est-usd'>150</span>
                                        <span>USD</span>
                                    </div>
                                </div>
                                <div class='flex'>
                                    <span>Est % of Rewards</span>
                                    <div>
                                        <span id='est-percent'>0.70</span>
                                        <span>%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button id="lockup-btn">
                            Lock Up
                        </button>
                    </div>
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
            <Footer/>
        </body>
    )
};
  
export default ProjectDetail;