import React,{Component} from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


class Modal extends Component {
    render(){
        return(
            <ProductConsumer>
                
                { value => {
                    const {modalOpen,closeModal} = value;
                    const {img,title,price} = value.modalProduct;

                    if(!modalOpen){
                        return (null) ;
                    } else {
                        return(
                            <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5>item added to the cart</h5>
                                        <img src={img} alt="" className="img-fluid" />
                                        <ul>
                                            <li>{`title: ${title}`}</li>
                                            <li>{`img: ${img}`}</li>
                                            <li>{`price: ${price}`}</li>
                                            <li onClick={ ()=>closeModal() }><Link to='/'>continue shopping</Link></li>
                                            <li onClick={ ()=>closeModal() }><Link to='/cart'>go to cart</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        )
                       
                    }

                } }

            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div `
top:0;
left:0;
right:0;
background:rgba(0,0,0,0.3);
display:flex; 
align-items:center;
justify-content:center;
#modal {
    background:var(--mainwhite);
}
`

export default Modal;