import Footer from '../component/Footer';
import './Swap.css';

const Swap = () => {
    return (
      <body>
        <div class='swap-container'>
          <div class='swap-graph'>
            <img id="swap-graph-img" src={require('../Assets/swap-graph.png')} alt="Swap-Graph" />
          </div>
          <div class='swap-info'>
            <img id="swap-info-ing" src={require('../Assets/swap-info.png')} alt="Swap Rate" />
            <button class="purple-gradient-btn" type="button" id="swap">
              Swap
            </button>


          </div>
        </div>
        <Footer/>
      </body>
    )
  };
  
  export default Swap;