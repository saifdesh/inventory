import React, { useState } from 'react';
import Books from '../../Books/Books';
import useBooks from '../../hooks/useBooks';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const [books, setBooks] = useBooks();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(book => book.id === selectedItem.id);
        if (!exists) {
            const newCart = [...cart, selectedItem]
            setCart(newCart)

        }
        else {
            alert('Item already added');
        }

    }

    const handleRemoveFromcart = (selectedItem) => {
        const rest = cart.filter(book => book.id !== selectedItem.id);
        setCart(rest);

    }



    return (
        <div className='home-container'>

            <div className='book-container'>
                {
                    books.map(book => <Books
                        key={book.id}
                        book={book}
                        handleAddToCart={handleAddToCart}

                    ></Books>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    handleRemoveFromcart={handleRemoveFromcart}
                    cart={cart}></Cart>

            </div>

        </div>
    );
};

export default Home;