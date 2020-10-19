import React from 'react';
import PayPalButton from './PayPalButton';

export default function CartTotals({value,history}) {
    const {cartSubtotal,cartTax,cartTotal,clearCart} = value;
    return(
        <React.Fragment>
            <ul>
                <li><button onClick={ ()=> clearCart() }>Clear Cart</button></li>
                <li>Subtotal: {cartSubtotal}</li>
                <li>Tax: {cartTax}</li>
                <li>Total: {cartTotal}</li>
                <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
            </ul>
        </React.Fragment>
    )
}