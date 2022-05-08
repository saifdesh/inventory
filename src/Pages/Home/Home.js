import React from 'react';
import Books from '../../Books/Books';
import useBooks from '../../hooks/useBooks';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const [books, setBooks] = useBooks();
    return (
        <div className='home-container'>

            <div className='book-container'>
                {
                    books.map(book => <Books
                        key={book.id}
                        book={book}>
                    </Books>)
                }
            </div>
            <div className='cart-container'>
                <Cart></Cart>

            </div>

        </div>
    );
};

export default Home;