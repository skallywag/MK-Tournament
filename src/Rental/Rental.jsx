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
                    <div className='features-con'>
                        <div className='icon-features'>
                            <div className='feat-icon-con'>
                                    <i className="far fa-hdd feat-icon"></i>
                            </div> 
                        </div>
                        <div>
                            High Speed ssd's
                        </div>
                    </div>

                    <div className='features-con'>
                        <div className='icon-features'>
                            <div className='feat-icon-con'>
                                    <i className="far fa-hdd feat-icon"></i>
                            </div> 
                        </div>
                        <div>
                            
                        </div>
                    </div>

                    <div className='features-con'>
                        <div className='icon-features'>
                            <div className='feat-icon-con'>
                                    <i className="far fa-hdd feat-icon"></i>
                            </div> 
                        </div>
                        <div>
                            High Speed ssd's
                        </div>
                    </div>
                </div>


        






            </section>
        )
    }
}

export default ServerRental