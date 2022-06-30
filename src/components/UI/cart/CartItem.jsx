import React from 'react'
import { List, ListGroupItem } from 'reactstrap'
import productImg from '../../../assets/images/hp4.jpg'
import "../../../styles/cart-item.css"

const CartItem = () => {
  return (
  <ListGroupItem className='border-0 cart__item'>
    <div className="cart__item-info d-flex gap-2">
        <img src={productImg} alt="product-img" />

        <div className="cart__product-info d-flex align-items-center gap-4 justify-content-between w-100">
            <div>
                <h6 className='cart__product-title'>Smartphone</h6>
                <p className='cart__product-price d-flex  align-items-center gap-5'>
                    2x <span>Rp.xx</span>
                </p>
                <div className="increase__decrease-btn d-flex align-items-center justify-content-between">
                    <span className='increase__btn' >
                    <i className="ri-add-line"></i>
                    </span>
                    <span>2</span>

                    <span className='decrease__btn'>
                    <i className="ri-subtract-line"></i>
                    </span>
                    
                </div>
            </div>

            <span className='delete__btn'>
            <i className="ri-close-line"></i>
            </span>
        </div>
    </div>
  </ListGroupItem>
  )
}

export default CartItem