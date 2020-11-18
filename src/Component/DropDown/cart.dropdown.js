import React from 'react'
import './cart-dropdown.style.scss';
import CustomButton from "../custom-button/custom-button.component";
import CartItem from '../cartItem/cart.item.componet'
import { toggleCartHidden } from '../../redux/cart/cartAction'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'


const CartDropdown = (props) => {
    const { cartItems, history, hidden } = props;
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                        (
                            cartItems.map(cartItem => {
                                return <CartItem key={cartItem.id} item={cartItem} />
                            }
                            )) :
                        <span className='empty-message'>Your cart is empty </span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                hidden();
            }}>CHECKOUT</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        hidden: () => dispatch(toggleCartHidden())
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))
