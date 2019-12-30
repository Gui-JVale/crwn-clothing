import React from 'react'; 

import CustomButton from '../custom-button/custom-bottom.component'; 

import './cart-dropdown.styles.sass'; 

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
);

export default CartDropdown; 