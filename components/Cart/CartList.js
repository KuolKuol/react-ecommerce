import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {
    const {cart} = value;
    console.log('2x')
    console.log(value,cart);
    return(
        <React.Fragment>
            <div className="container-fluid">
                {cart.map(item => {
                    return  <CartItem key={item.id} item={item} value={value}/>
                } )}
            </div>
        </React.Fragment>
    )
}

