import React from 'react';

const EmptyCart = () => {
    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        Your Cart Is Empty
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EmptyCart;