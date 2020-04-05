import React, { PureComponent } from 'react'
import './Footer.scss'

class Contact extends PureComponent {


    render() {
        return (
            <section>
                    <div className='social-con'>
                        <div className='social-title'>
                            <h4>Find us on Social</h4>
                            <i class="fab fa-youtube social-icon"></i>
                            <i class="fab fa-twitch social-icon"></i>
                            <i class="fab fa-instagram-square social-icon"></i>
                            <i className='social-icon' class="fab fa-facebook-square social-icon"></i>
                        </div>    
                    </div>
               <div className='copy-right-con'>
                    <h1>Copy right 2020. all rights reserved</h1>
               </div>
               

            
            
            </section>
        )
    }
}

export default Contact