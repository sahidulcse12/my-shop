import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img } = props.product;
    return (
        <div className="products-container">
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h5>{name}</h5>
            </div>
        </div>
    );
};

export default Product;