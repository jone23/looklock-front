import {useState} from 'react';

const About = ({ accounts, setAccounts }) => {
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
            {/* About us */}
            <div>About us</div>     
            <div class='about-intro'>
                <div class='text text60'>
                    Look and Lock. Your chances are all here.
                </div>  
                <div class='text text24'>
                    LookLock is a aggregator platform to make it easy to approach 
                    all lockdrop projects in Polygon ecosystem.
                    If you launch your lockdrop event for your new project, 
                    we’ll sure our LookLock platform is the best place. 
                </div>
                <div class='text text16'>
                    Examples of which features are powered by LookLock include:
                    <ul>
                        <li>Grasping all **lockdrop projects at a glance.</li>
                        <li>Simplifying the lockdrop procedure</li>
                        <li>Expose new projects to users interested in Lockdrop</li>
                    </ul>
                </div>
            </div>
            <div class='about-lolo-intro'>
                <div class='text text50'>What is LOLO?</div>
                <div class='text text24'>
                    LOLO is LookLock’s own Token for participating Lockdrop projects.
                    It is set as the default lockup token for all projects.
                </div>
                <div class='text text20'>
                    Choose whether to use it or not:
                    ㆍIf you use LOLO token for projcets, platform using fee is to be exempted.
                </div>
            </div>
            {/* LOLO */}
            <div class='lolo'>
                <div class='text text-gray text20'>Current Ratio</div>
                <div class='text text70'>1 LOLO = 1.22 USD</div>
                <div class='text text-gray text22'>8,092,433 LOLO</div>
                <div class='text text-gray text22'>9,354,672 USD</div>
            </div>
            {/* Admin */}
            <div class='admin'>
                <div class='text text36'>Admin</div>
                <div class='text text-gray text-24 text-sidebar'>Benefit</div>
                <div class='text text18'>
                    If you have a plan to launch a lockdrop event for your new project, we’ll sure our LookLock platform is the best place for you.
                    You can promote your projects to people who are interested in and willing to participate in Lockdrop projects.
                    With us, you can save time and cost to build a system for your lockdrop projects when you launch them in your own website.
                    Launch and boost your Lockdrop project on LookLock!
                </div>
                <div class='text text-gray text-24 text-sidebar'>Requirement</div>
                <div class='text text18'>
                    Your project should include LOLO token as lockable token.
                    If you use only LOLO token in a project, there would be no platform using fee
                    For launching on LookLock, projects need to make some decisions below:
                </div>
                <div class='text text18 text-list'>
                    <ul>
                        <li>Type of token that you want to lock up</li>
                        <li>Total token rewards for lockdrop</li>
                        <li>Lockdrop Period</li>
                        <ul>
                            <li>phase 1 (period when investor can deposit & witdraw freely) </li>
                            <li>phase 2 (period when investor can witdraw only)</li>
                        </ul>
                        <li>withdrawable percentage for specific periods in phase 2</li>
                        <li>Cliff Period</li>
                        <li>Rewards multiplier of each cliff period</li>
                    </ul>
                </div>
            </div>

            {/* Register */}
            <div class='register btn'>
                <button>Register</button>
            </div>
        </div>
        
    )
}