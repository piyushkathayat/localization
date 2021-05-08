import React from 'react';
import { Button } from 'semantic-ui-react';

const ProductDetail = ({ match, history }) => {
    return (
        <div>
            <h2>Product Detail : {match.params.id}</h2>
            <Button
                onClick={() => { history.push("/products") }}>
                Back
            </Button>
        </div>
    )
}

export default ProductDetail;
