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
                                <li>lockdrop apply period</li>
                                <li>lock period</li>
                                <li>allocated amount</li>
                            </ul>
                        </div>
                    </div>
                    <div id='participation-rate'>
                        <h3>Participation Rate per Days</h3>
                        <div class='outer-box'>
                            <div class='inner-box'>inner-box  
                            </div>
                            <div class='inner-box'>inner-box
                            </div>
                        </div>
                        <div class='outer-box'>
                            <div class='inner-box'>inner-box  
                            </div>
                            <div class='inner-box'>inner-box
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
                        </div>
                    </div>
                </div>
                <div id='lockup-wrapper'>

                </div>
            </div>
            <Footer/>
        </body>
    )
};
  
export default ProjectDetail;