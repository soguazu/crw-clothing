import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/4.4 crown.svg.svg';
import {auth} from '../../firebase/firebase.util';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'>
        SHOP
      </Link>
      <Link to='/signin' className='option'>
        CONTACT
      </Link>
        {
          currentUser ? (
              <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            ) : (
              <Link className='option' to='/signin'>
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

const mapStateToProps = ({ user: { currentUser },  cart: { hidden }}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);