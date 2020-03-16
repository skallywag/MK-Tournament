import React, { PureComponent } from 'react'
import './LatestMatches.scss'
class LatestMatches extends PureComponent {

        state = {
            
        }
    

    render() {
        return (
            <section className='latest-con'>

                <div className='latest-title'>
                    <div>LATEST<div className="latest-txt-red">MATCHES</div></div>
               </div>

                <div className='match-card'>
                    <iframe title="myFrame1" height='180' width='100%' className='match-vid' src="https://www.youtube.com/embed/x-ROjhnvp-A?start=53" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
               
                <div className='match-card'>
                    <iframe title="myFrame2" height='180' width='100%' className='match-vid' src="https://www.youtube.com/embed/IoNT1VReA9I" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
               
                <div className='match-card'>
                    <iframe title="myFrame3" height='180' width='100%' className='match-vid' src="https://www.youtube.com/embed/VXHzfcpvmxU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
          
            </section>
        )
    }
}

export default LatestMatches