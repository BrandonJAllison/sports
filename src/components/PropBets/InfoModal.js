import React from 'react'
import './infomodal.scss'



const Modal = (props) => {

    return (
        <div className='modal-main' style={{ display: props.show ? 'block' : 'none' }}>
            <p><b>STATISTIC/STATS</b></p>
            <p>
                A bet on a single player or two players combined to achieve a specific statistical performance. E.g. LeBron James to score 30 or more points against the Warriors.
            </p>
            <p><b>H2H</b></p>
            <p>
                A head-to-head bet is where you select one player to outperform another for a selected statistic. E.g. Messi to have more shots on goal than Ronaldo.
            </p>
            <p><b>TRIOS</b></p>
            <p>
                Similar to a horse racing trifecta bet where you select the 3 players to finish in the exact order from highest to lowest for a selected statistic.
            </p>
        </div>
    );
};

export default Modal