import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
    state = {
        products: [
            { id: 1, name: "Product -1 " },
            { id: 2, name: "Product -2 " },
            { id: 3, name: "Product -3 " }
        ]
    }
    render() {
        return (
            <div>
                Products
                <ul>
                    {this.state.products.map(product => {
                        return (
                            <li key={product.id}>
                                <Link to={`/product/${product.id}`}>{product.name}</Link>
                            </li>)
                    })}
                </ul>
            </div>
        )
    }
};

export default Products;
