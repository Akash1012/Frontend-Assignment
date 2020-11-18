import React from 'react';
import './NavBar.css';
import logo from '../image/logo.jpg'
import CartIcon from '../Component/cart.icon/cart.icon.component'
import { connect } from 'react-redux';
import CartDropdown from './DropDown/cart.dropdown';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        const { hidden } = this.props;
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/"> <img alt="Logo" src={logo} style={{ width: '50px', borderRadius: '50%' }} /> </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Shop <span className="sr-only">(current)</span></Link>
                            </li>

                            <li className="nav-item active">
                                <Link to="/" className="nav-link">About Us <span className="sr-only">(current)</span></Link>
                            </li>

                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Our Stores <span className="sr-only">(current)</span></Link>
                            </li>

                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Contact Us <span className="sr-only">(current)</span></Link>
                            </li>

                        </ul>
                        <CartIcon />
                        {hidden ? null : <CartDropdown />}
                    </div>
                </nav>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        hidden: state.cart.hidden
    }
}

export default (connect)(mapStateToProps)(NavBar);



