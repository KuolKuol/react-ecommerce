import React,{Component} from 'react';
import Title from './Title';
import {ProductConsumer} from '../context';
import Product from './Product';

class ProductList extends Component {

    render(){

        return(
            <React.Fragment>

                <Title name="Our" title="Products"/>

                <ProductConsumer>
                    {
                        (value) => {
                            return(
                                <React.Fragment>
                            
                                    {value.products.map(product => {
                                        return <Product key={product.id} product={product}/>;
                                    })}

                                </React.Fragment>
                            )
                        }
                    }
                </ProductConsumer>

            </React.Fragment>
        )
    }

}

export default ProductList;