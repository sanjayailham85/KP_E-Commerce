import React from 'react'
import { Link } from 'react-router-dom'
import  "../../../styles/product-card.css"

const ProductCard = (props) => {

  const {id, title, image01, price, desc} = props.item
  return (
    <div className='product__item'>
        <div className='product__img'>
            <img src={image01} alt='product-img' className='w-100' />
        </div>

        <div className='Product__content'>
            <h5>
              <Link to={`/devices/${id}`}>{title}</Link>
            </h5>
            <div className='d-flex align-items-center justify-content-between mt-3'>
                <span className='product__price'>{price}</span>
                <button className='AddToCart__btn'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard