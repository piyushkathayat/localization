import React from 'react';
import { Button } from 'semantic-ui-react';

const ProductDetail = ({ match, history }) => {
    return (
        <div>
            <Button
                onClick={() => { history.push("/products") }}>
                Back
            </Button>
            <div>Product Detail : {match.params.id}</div>
        </div>
    )
}

export default ProductDetail;
