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
                    <img className='nav-logo'src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Mortal_Kombat_Logo.svg/1920px-Mortal_Kombat_Logo.svg.png" alt=""/>
                    <i class="far fa-user-circle profile"></i>
                    <div className='burger' onClick={ () => this.toggleMenu() }>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
    
                </div>

                <ul className='main-nav-links'>
                    <li><a href="">About</a></li>
                    <li><a href=""></a>Sign up</li>
                    <li><a href=""></a>Sign in</li>
                </ul>

                <div className='heading-con'>
                     <div className='img-text'>FIGHT!</div>
                        <img src="https://wallpapercave.com/wp/wp2655168.jpg" alt="main image" width="100%"/>  
                </div>

                <div className='mobile-nav' style={{ display: this.state.menuOpen ? "block" : "none"}}>
                    <div className='nav-links'>
                        <ul>
                            <li>About</li>
                            <li>Forums</li>
                            <li>Tournaments</li>
                            <li>Store</li>
                            <li>Sign in</li>
                            <li>Log out</li>
                        </ul>
                    </div>
                </div>

            </header>
        )
    }
}

export default Header

            
