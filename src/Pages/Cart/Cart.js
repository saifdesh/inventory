import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromcart }) => {
    return (
        <div className='cart'>
            <h2>Item Slected: {cart.length}</h2>

            {
                cart.map(book => <p>{book.name}
                    <button onClick={() => handleRemoveFromcart(book)}>X</button>
                </p>
                )
            }

        </div>
    );
};

export default Cart;