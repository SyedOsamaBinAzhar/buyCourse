import React, { Component } from 'react'
import {Link} from "gatsby";
import Logo from "../../images/logo.png"
import "./Navbar.css"

//import fontawesome
import {FaCartArrowDown} from "react-icons/fa"

export default class Navbar extends Component {

    state = {
        navbarStatus : false,
        navbarClass : `collapse navbar-collapse`,
        menus : [
            {
            id:1,
            text: "Home",
            url: "/"
        },
        {
            id:2,
            text: "About Us",
            url: "/about"
        },
        {id:3,
            text: "Contact",
            url: "/contact"
        },
        {
            id:4,
            text: "Services",
            url: "/services"
        }]
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
                        {
                            this.state.menus.map(menu => {
                                return(
                                     <li key={menu.id} className="nav-item"><Link to={menu.url} className="nav-link text-white">{menu.text}</Link></li>
                                )
                            })
                        }
                        <li className="nav-item"><Link to="/" className="nav-link text-white"><FaCartArrowDown className="cart-icon"/></Link></li>

                    </ul>
                </div>
            </nav>

        )
    }
}
