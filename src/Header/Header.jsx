import React, { PureComponent } from 'react'
import './Header.scss'
class Header extends PureComponent {

    state = {
        menuOpen: false
    }

    toggleMenu() {
        console.log("hey im being clicked");

        this.setState({
            menuOpen: !this.state.menuOpen
        }, () => console.log(this.state))
    }


    render() {
        return (
            <header>

                <div className='main-nav-con'>
                    {/* eslint-disable-next-line */}
                    <img className='nav-logo'src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Mortal_Kombat_Logo.svg/1920px-Mortal_Kombat_Logo.svg.png" alt="other"/>
                    <i className="far fa-user-circle profile"></i>
                    <div className='burger' onClick={ () => this.toggleMenu() }>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
    
                </div>

                <ul className='main-nav-links'>
                    {/* eslint-disable-next-line */}
                    <li><a href="https://www.mortalkombat.com/">About</a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="https://www.mortalkombat.com/"></a>Sign up</li>
                    {/* eslint-disable-next-line */}
                    <li><a href="https://www.mortalkombat.com/"></a>Sign in</li>
                </ul>

                <div className='heading-con'>
                     <div className='img-text'>FIGHT!</div>
                        <img src="https://wallpapercave.com/wp/wp2655168.jpg" alt="main" width="100%"/>  
                </div>

                <div className='mobile-nav' style={{ display: this.state.menuOpen ? "block" : "none"}}>
                    <div className='nav-links'>
                        <ul>
                            <a href="#"><li>About</li></a>
                            <a href="#"><li>Forums</li></a>
                            <a href="#"><li>Tournaments</li></a>
                            <a href="#"><li>Store</li></a>
                            <a href="#"><li>Sign In</li></a>
                            <a href="#"><li>Sign Out</li></a>
                        </ul>
                    </div>
                </div>
            
            </header>
        )
    }
}

export default Header

            
