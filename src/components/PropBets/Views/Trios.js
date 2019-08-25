import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartLine } from '@fortawesome/free-solid-svg-icons'

const Trios = props => {

    return (

        <>

            <div className='playerAdd' style={{ border: '1px solid black', padding: '.2rem', marginTop: '10px', background: '#40484D', display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesomeIcon icon={faUser} />
                <p style={{ color: 'white', marginLeft: '10px' }}>SELECT PLAYER</p>
            </div>

            <div className='playerAdd' style={{ border: '1px solid black', padding: '.2rem', marginTop: '2px', background: '#40484D', display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesomeIcon icon={faUser} />
                <p style={{ color: 'white', marginLeft: '10px' }}>SELECT PLAYER</p>
            </div>

            <div className='playerAdd' style={{ border: '1px solid black', padding: '.2rem', marginTop: '2px', background: '#40484D', display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesomeIcon icon={faUser} />
                <p style={{ color: 'white', marginLeft: '10px' }}>SELECT PLAYER</p>
            </div>
            <p>In order of most</p>
            <div className='statAdd' style={{ border: '1px solid black', padding: '.2rem', marginTop: '10px', background: '#40484D', display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesomeIcon icon={faChartLine} />
                <p style={{ color: 'white', marginLeft: '10px' }}>SELECT STAT</p>
            </div>
            <div style={{ border: '1px solid black', textAlign: 'center', width: '35%', margin: '25px 10px 10px 10px' }} >
                <p>0</p>
                <p>ODDS</p>

            </div>
        </>

    )

}
export default Trios