import React, {useRef} from "react";
import { Container } from "reactstrap";
import logo from '../../assets/images/logo1.png'
import { NavLink, Link } from "react-router-dom"
import '../../styles/header.css'


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
    
    
    const menuRef = useRef(null)
    const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')
    return (
        <header className="header">
            <Container >
                <div className="nav__wrapper d-flex align-items-center justify-content-between ">
                    
                <div className="logo">
                <Link to='/home'>
                    <img src={logo} alt="logo"/>
                    </Link>
                </div>
                
                
            {/* -----MENU----- */}
                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <div className="menu d-flex align-items-center gap-5">
                    {
                        nav__links.map((item, index)=>(
                            <NavLink 
                            
                            to={item.path} key={index}
                            className={navClass => navClass.isActive ? 'active__menu' : " "}
                            >
                            {item.display}
                            </NavLink>
                        ))
                    }
                    </div>
                </div>
            
            {/* Nav Icons */}
                    <div className="nav__right d-flex align-items-center gap-4">
                        <span className="cart__icon">
                        <i className="ri-shopping-cart-line"></i>
                        <span className="cart__badge">5</span>
                        </span>
                        
                        <span className="user">
                            <Link to='/login'>
                                <i className="ri-user-3-line"></i> 
                            </Link>
                        </span>
                        
                        <span className="mobile__menu" onClick={toggleMenu}>
                        <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;