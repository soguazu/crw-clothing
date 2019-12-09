/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './header.styles.scss';
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/4.4 crown.svg.svg';
import { auth } from '../../firebase/firebase.util';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/signin" className="option">
        CONTACT
      </Link>
      {
          currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          ) : (
            <Link className="option" to="/signin">
                SIGNIN
            </Link>
          )
        }
      <CartIcon />

    </div>
    {
      hidden ? null : <CartDropdown />
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);