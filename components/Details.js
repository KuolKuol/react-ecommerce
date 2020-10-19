import React,{Component} from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

class Details extends Component {

    render(){
        return(
            <ProductConsumer>
                {
                    (value) => {
                        const {id,company,img,info,price,title,inCart} = value.detailProduct;
                        return (
                            <React.Fragment>
                                <img src={img} alt=""/>
                                <ul>
                                    <li>{`ID: ${id}`}</li>
                                    <li>{`title: ${title}`}</li>
                                    <li>{`company: ${company}`}</li>
                                    <li>{`img: ${img}`}</li>
                                    <li>{`info: ${info}`}</li>
                                    <li>{`price: ${price}`}</li>
                                    <li><Link to='/'>Back to products</Link></li>
                                    <li>
                                        <button disabled={inCart?true:false} onClick={ () =>{
                                            value.addToCart(id)
                                            value.openModal(id)
                                            } }>{inCart?"In Cart":"add to cart"}</button>
                                    </li>
                                </ul>

                            </React.Fragment>
                        )
                    } 
                }
            </ProductConsumer>
        )
    }

}

export default Details;