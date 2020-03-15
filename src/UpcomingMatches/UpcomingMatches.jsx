import React, { PureComponent } from 'react'
import './UpcomingMatches.scss'
class UpcomingMatches extends PureComponent {

    

    render() {
        return (
            <section className='upcoming-con'>
                <div className='upcoming-title'>
                    <div>UPCOMING<div className="matches-txt-red">MATCHES</div> </div>
               </div>

                <div className='vs-card'>

                    <div className='player'>
                        <h1>Skallywagg</h1>
                        <p>Wins: 189</p>
                         <p>Losses: 84</p>
                        <p>Win odds: 89$</p>
                     </div>

                        <h2 className='vs'>VS</h2>

                    <div className='player'>
                     <h1>Pwntastic</h1>
                     <p>Wins: 176</p>
                     <p>Losses: 112</p>
                     <p>Win odds: 60%</p>
                 </div>
                </div>
                <div>
                    <div className='vs-time'>
                        <div>
                            <p>March 2, 2020 3:00p.m.</p>
                        </div>
                    </div>
                </div>
                
                

                    



            </section>
        )
    }
}

export default UpcomingMatches