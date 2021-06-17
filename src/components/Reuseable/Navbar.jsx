import React, { Component } from 'react'
import {Link} from "gatsby";
import Logo from "../../images/logo.png"
import "./Navbar.css"

//import fontawesome
import {FaCartArrowDown} from "react-icons/fa"

export default class Navbar extends Component {

    state = {
        navbarStatus : false,
        navbarClass : `collapse navbar-collapse`
    }

    myToggler = () => {
        this.state.navbarStatus? this.setState({navbarStatus:false,navbarClass:`collapse navbar-collapse`}) : this.setState({navbarStatus:true,navbarClass:`collapse navbar-collapse show`}); 
    }
    render() {
        return (
            <nav className="narbar navbar-expand-sm bg-theme text-white">
                <Link to="/" className="navbar-brand ml-5">
                    <img src={Logo} alt="logogo" width="40px" />
                </Link>
                <button className="navbar-toggler" type="button" onClick={this.myToggler}><span className="text-white">Menu</span></button>
                <div className={this.state.navbarClass}>
                    <ul className="navbar-nav ml-auto mr-5 background" >
                        <li className="nav-item"><Link to="/" className="nav-link text-white">Home</Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link text-white">About Us</Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link text-white"><FaCartArrowDown className="cart-icon"/></Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link text-white">Home</Link></li>

                    </ul>
                </div>
            </nav>

        )
    }
}
