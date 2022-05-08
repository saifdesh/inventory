import React from 'react';
import { Button } from 'react-bootstrap';
import './Books.css';

const Books = ({ handleAddToCart, book }) => {
    const { name, img, id, price } = book;
    return (
        <div className='book'>
            <img src={img} />
            <h6> {name}</h6>
            <h6>Price: ${price}</h6>
            <p>ID: {id}</p>
            <Button onClick={() => handleAddToCart(book)} className='bg-dark'>Add to Cart</Button>

        </div>
    );
};

export default Books;