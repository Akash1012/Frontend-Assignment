import React from 'react';
import './cart-item.style.scss'

const CartItem = (props) => {
    const { item } = props
    const { name, price, image_src, quantity } = item;
    return (
        <div className='cart-item'>
            <img src={image_src} alt="item" />
            <div className="item-details">
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem