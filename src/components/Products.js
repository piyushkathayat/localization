import React from 'react';

const Products = (props) => {
    const pathName = props.location.pathname;
    return (
        <div>
            Products path : {pathName}
        </div>
    )
};

export default Products;