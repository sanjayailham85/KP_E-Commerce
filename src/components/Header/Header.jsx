import React from "react";
import { Container } from "reactstrap";
import logo from '../../assets/download.png'
import { NavLink, Link } from "react-router-dom"


const nav__links = [
    {
    display: 'Home',
    path: '/home'
    },
    
    {
    display: 'Devices',
    path: '/devices'
    },
    
    {
    display: 'Cart',
    path: '/cart'
    },

    {
    display: 'Contact',
    path: '/contact'
    },

]

const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="nav__wrapper d-flex align-items-center justify-content-between ">
                    
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <h5>-----------</h5>
                </div>
                
                
            {/* -----MENU----- */}
                <div className="navigation">
                    <div className="menu d-flex align-items-center gap-5">
                    {
                        nav__links.map((item, index)=>(
                            <NavLink to={item.path} key={index}>{item.display}</NavLink>
                        ))
                    }
                    </div>
                </div>
            
            {/* Nav Icons */}
                    <div className="nav__right d-flex align-items-center gap-4">
                        <span className="cart__icon">
                        <i className="ri-shopping-cart-line"></i>
                        <span className="cart__badge"></span>
                        </span>
                        
                        <span className="user">
                            <Link to='/login'>
                                <i className="ri-user-3-line"></i> 
                            </Link>
                        </span>

                        <span className="mobile__menu">
                        <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;