import React, { createRef, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import './Inventory.css';

const Inventory = () => {
    let initialValue = [];
    const [products, setProducts] = useState(initialValue);
    const formData = createRef();
    const incIndex = createRef();
    const add = (event) => {
        event.preventDefault();

        const newProduct = {
            product_name: formData.current.product_name.value,
            price: formData.current.price.value,
            qty: Number(formData.current.qty.value)
        }
        // console.log(newProduct);

        // add a new product inside products array. 

        setProducts([...products, newProduct]);
        // console.log(products);
    }
    // increment qty value by 1

    const increQty = (event) => {
        // console.log(incIndex.current.value);
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty + 1;
        setProducts([...products]);

    }

    // decrement qty value by 1

    const decreQty = (event) => {
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty - 1;
        setProducts([...products]);

    }




    return (
        <div>

            <h4 className='form-title'>Product Inventory form</h4>
            <div className='container'>
                <div className='container-form'>
                    <Form className='form text-center mb-3 mt-3' onSubmit={add} ref={formData}>
                        <Form.Group className="mb-3" controlId="formBasicProductName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter the Product Name" name="product_name" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="number" placeholder="Enter Price" name="price" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicQty">
                            <Form.Label >Product Quantity</Form.Label>
                            <Form.Control type="number" placeholder="Enter How Many" name="qty" />
                        </Form.Group>

                        <Button className='mb-3 text-center' variant="primary" type="submit">
                            Add to Inventory of Products
                        </Button>
                    </Form>
                    <div>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Index</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Add more</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index}</td>
                                                <td>{product.product_name}</td>
                                                <td>{product.price}</td>
                                                <td>{product.qty}</td>
                                                <td>
                                                    <Button className='ml' variant='success' onClick={event => increQty(event)} value={index} >+</Button>
                                                    <Button className='ml' variant='danger' onClick={event => decreQty(event)} value={index}>-</Button>

                                                </td>
                                            </tr>
                                        )

                                    })
                                }

                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>







        </div>
    );
};

export default Inventory;