import React, { PureComponent } from 'react'
import './Rental.scss'
class ServerRental extends PureComponent {
    

    render() {
        return (
            <section className='server-rental-con'>
                
                <div className='rental-title'>
                    <div>SERVER<div className="rental-txt-red">RENTALS</div> </div>
               </div>

                <div className="features-container">

                    <div className='features-card'>
                        <div className='icon-features'>
                            <div className='feat-icon-con'>
                                    <i className="far fa-hdd feat-icon"></i>
                            </div> 
                        </div>
                        <div className='icon-text'>
                            High speed ssd's
                        </div>
                    </div>

                    <div className='features-card'>
                        <div className='icon-features'>
                            <div className='feat-icon-con'>
                            <i className="fas fa-cogs feat-icon"></i>
                            </div> 
                        </div>
                        <div className='icon-text'>
                            No Setup
                        </div>
                    </div>

                    <div className='features-card'>
                        <div className='icon-features'>
                            <div className='feat-icon-con'>
                            <i class="fas fa-shield-alt feat-icon"></i>
                            </div> 
                        </div>
                        <div className='icon-text'>
                           Ddos Protection
                        </div>
                      </div> 
                </div>

                <div className="features-container">

                    <div className='features-card'>
                        <div className='icon-features'>
                            <div className='feat-icon-con'>
                            <i class="fas fa-globe feat-icon"></i>
                            </div> 
                        </div>
                        <div className='icon-text'>
                            Global Locations
                        </div>
                    </div>

                    <div className='features-card'>
                        <div className='icon-features'>
                            <div className='feat-icon-con'>
                            <i class="fas fa-headset feat-icon"></i>
                            </div> 
                        </div>
                        <div className='icon-text'>
                            24/7 Support
                        </div>
                    </div>

                    <div className='features-card'>
                        <div className='icon-features'>
                            <div className='feat-icon-con'>
                            <i class="fas fa-tachometer-alt feat-icon"></i>
                            </div> 
                        </div>
                        <div className='icon-text'>
                            High Speed
                        </div>
                      </div> 
                </div>
                <div className='pricing-card'>
                    <div className='price'>
                        $6.99 - 2/hrs
                    </div>
                    <div className='rental-btn'>
                        Order now
                    </div>
                </div>

                <div className='pricing-card'>
                    <div className='price'>
                        $12.99 - 4/hrs
                    </div>
                    <div className='rental-btn'>
                        Order now
                    </div>
                </div>
               
                <div className='pricing-card'>
                    <div className='price'>
                        $16.99 - 6/hrs
                    </div>
                    <div className='rental-btn'>
                        Order now
                    </div>
                </div>

                <div className='pricing-card'>
                    <div className='price'>
                        $24.99 - 8/hrs
                    </div>
                    <div className='rental-btn'>
                        Order now
                    </div>
                </div>

                

                


        






            </section>
        )
    }
}

export default ServerRental