import React from 'react';
import { Button } from 'react-bootstrap';
import './Books.css';

const Books = (props) => {
    const { name, img, id, price } = props.book;
    return (
        <div className='book'>
            <img src={img} />
            <h6> {name}</h6>
            <h6>Price: ${price}</h6>
            <p>ID: {id}</p>
            <Button className='bg-dark'>Add to Cart</Button>

        </div>
    );
};

export default Books;