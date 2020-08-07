import React from 'react'
import './Product.css';
// import {Link} from 'react-router-dom'

function Product(props) {
    const { name, price, img } = props
    console.log('Product Props:"')
    return (
        <div className='Product'>
            <div className="image-container">
                <img src={img} className="product-image" alt={`Image for ${name}`} />
            </div>
            <div className="product-info">
                <h2 className="info product-title">{name}</h2>
                <h2 className="info product-price">${price}</h2>
            </div>
        </div>
    )
}

export default Product