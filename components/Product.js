import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProductConsumer } from '../context';


class Product extends Component {
    render(){

        const {id,title,img,price,inCart} = this.props.product;

        return(

            <div className="card">
                
                <ProductConsumer>

                    { value => ( 

                        <div onClick={()=> {
                            value.handleDetail(id);
                            // console.log(id);
                        }}>
                        <img src={img} alt="" className="card-img-top"/>
                        <ul>
                            <li>{`Title: ${title}`}</li>
                            <li>{`ID: ${id}`}</li>
                            <li>{`Price: ${price}`}</li>
                            <li><Link to='/details'>Link</Link></li>
                            {/* <li onClick={value.handleDetail(id)}>Link2</li> */}
                            <li>

                                <button className="cart-btn" disabled={inCart?true:false} onClick={()=>{
                                value.addToCart(id);
                                value.openModal(id);
                            }}> {inCart?<p className="text-capitalizes mb-0" disabled>In Cart</p>:<i className="fas fa-cart-plus"></i>} 
                                </button>
                            
                            </li>
                        </ul>
                        </div>
                        
                    ) }

                </ProductConsumer>
            </div>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,
    }).isRequired
};

export default Product;