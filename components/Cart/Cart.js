import React,{Component} from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';


class Cart extends Component {
    render(){
        return(
            <React.Fragment>
                
                <Title name="Your" title="Cart"></Title>

                <ProductConsumer>

                    { value => {
                        const {cart} = value;

                        if(cart.length > 0) {
                            return(
                                <React.Fragment>
                                    <CartColumns/>
                                    <CartList value={value}/>
                                    <CartTotals value={value} history={this.props.history}  />
                                </React.Fragment>
                            )
                        } else {
                            return <EmptyCart/>
                        }
                    } }

                </ProductConsumer>
            
            </React.Fragment>
        )
    }
}

export default Cart;