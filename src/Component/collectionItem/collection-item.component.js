import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartAction';
import CustomButton from "../custom-button/custom-button.component";
import Options from './Options'
import './collection-item.style.scss'

class CollectionItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }

    toggleHover = () => {
        this.setState({ hover: true })
    }

    toogleLeave = () => {
        this.setState({ hover: false })
    }

    render() {
        const { item, addItem } = this.props;
        const { name, price, image_src, vendor, options } = item;

        return (
            <div>
                <div className='collection-item'>
                    <div className="image" style={{ backgroundImage: `url(${image_src})` }} />
                    <CustomButton onClick={() => addItem(item)} onMouseOver={this.toggleHover} onMouseLeave={this.toogleLeave} inverted>Add to cart</CustomButton>
                </div>
                <div>
                    <span className="name">{vendor}</span>
                </div>
                <span style={{ 'color': 'grey' }}>{name}</span>
                <p><b>{price}</b></p>
                <Options newData={options} toogleValue={this.state.hover} />
            </div >
        )
    }

}

const mapDispatchToProps = (dispatch) => {

    return {
        addItem: (item) => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem);