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
                <iframe className='match-vid' src="https://www.youtube.com/embed/x-ROjhnvp-A?start=53" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className='match-card'>
                <iframe className='match-vid' src='<iframe width="560" height="315" src="https://www.youtube.com/embed/IoNT1VReA9I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' allowfullscreen></iframe>
                </div>

                <div className='match-card'>
                <iframe className='match-vid' src='<iframe width="560" height="315" src="https://www.youtube.com/embed/IoNT1VReA9I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' allowfullscreen></iframe>
                </div>



                
        

                    
            </section>
        )
    }
}

export default LatestMatches