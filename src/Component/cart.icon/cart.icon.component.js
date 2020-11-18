import React from 'react';
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cartAction';
import { selectCartItemsCount } from '../../redux/cart/cart.utils'
import { ReactComponent as ShoppingIcon } from '../../image/shopping-bag.svg'
import './cart-icon.style.scss';

const CartIcon = (props) => {
    const { toggleCardHidden, itemCount } = props;
    return (
        <div className="cart-icon" onClick={toggleCardHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCardHidden: () => dispatch(toggleCartHidden())
    }
}

const mapStateToProps = (state) => {
    return {
        itemCount: selectCartItemsCount(state.cart.cartItems)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

// export default CartIcon;