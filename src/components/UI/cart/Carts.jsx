import React from 'react'
import { ListGroup } from 'reactstrap'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import "../../../styles/shopping-cart.css"


const Carts = () => {
  return <div className='cart__container'>
    <ListGroup className='cart'>
        <div className="cart__close">
            <span><i className="ri-close-fill"></i></span>
        </div>

        <div className="cart__item-list">
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>

        <div className='cart__bottom d-flex align-items-center justify-content-between'>
            <h6>Subtotal: <span>Rp.xx</span>
            </h6>
            <button>
                <Link to="/checkout">Checkout</Link>
            </button>
        </div>

    </ListGroup>
  </div>
}

export default Carts