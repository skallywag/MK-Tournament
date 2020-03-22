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

                    <div>
                        <h1>Skallywagg</h1>
                        <p>Wins: 189</p>
                         <p>Losses: 84</p>
                        <p>Win odds: 89$</p>
                     </div>

                    <div className='vs'>VS</div>

                    <div >
                     <h1>Pwntastic</h1>
                     <p>Wins: 176</p>
                     <p>Losses: 112</p>
                     <p>Win odds: 60%</p>
                 </div>
                </div>

                <div className='vs-card'>

                    <div>
                        <h1>Shalfosizzle</h1>
                        <p>Wins: 156</p>
                         <p>Losses: 84</p>
                        <p>Win odds: 61%</p>
                     </div>

                     <div className='vs'>VS</div>

                    <div className>
                     <h1>Mengodown</h1>
                     <p>Wins: 162</p>
                     <p>Losses: 90</p>
                     <p>Win odds: 68%</p>
                 </div>
                </div>

                <div className='vs-card'>

                    <div>
                        <h1>Derwood</h1>
                        <p>Wins: 98</p>
                         <p>Losses: 97</p>
                        <p>Win odds: 70%</p>
                     </div>

                     <div className='vs'>VS</div>

                    <div>
                     <h1>Kleb</h1>
                     <p>Wins: 1</p>
                     <p>Losses: 89</p>
                     <p>Win odds: -1%</p>
                 </div>
                </div>
            
    
                

                    



            </section>
        )
    }
}

export default UpcomingMatches