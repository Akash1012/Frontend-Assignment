import React from 'react';
import { connect } from 'react-redux';
import { productfilter, productfilterAsPerPrice, reset } from '../../redux/SHOP_DATA/shop.action'
import CollectionPage from '../collection.component';
import './filter.style.scss';


class Filter extends React.Component {

    state = {
        value: 'select',
    }


    change = (event) => {
        this.setState({
            value: event.target.value
        })
        this.props.productfilterAsPerPrice(event.target.value)
    }

    render() {
        const { productfilter, reset } = this.props
        return (
            <div>
                <button onClick={reset}>All Product</button>
                <button onClick={() => productfilter('T-shirt')}>T-shirt</button>
                <button onClick={() => productfilter('Denim')}>Denim</button>
                <button onClick={() => productfilter('jacket')}>jacket</button>
                <button onClick={() => productfilter('shirt')}>shirt</button>
                <select id="lang" onChange={this.change} value={this.state.value}>
                    <option value="select">Sort By Price</option>
                    <option value="LOW">Price Low to High</option>
                    <option value="HIGH">Price High to Low</option>
                </select>
                <CollectionPage SHOP_DATA={this.props.SHOP_DATA} />
            </div>
        )
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        productfilter: (data) => dispatch(productfilter(data)),
        productfilterAsPerPrice: (data) => dispatch(productfilterAsPerPrice(data)),
        reset: () => dispatch(reset())
    }
}


const mapStateToProps = (state) => {
    return {
        SHOP_DATA: state.shop.SHOP_DATA,
        DATA: state.shop.PrevState
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Filter)