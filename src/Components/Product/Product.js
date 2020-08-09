import React from 'react'
import './Product.css';
// import {Link} from 'react-router-dom'

function Product(props) {
    const { name, price, img, id } = props

    function sendToEditForm(product_id){
        const formData = {
            name: name,
            price: price,
            img: img
        }
        console.log("Product sends to edit:", formData)
        props.prepEditForm(formData)
    }


    return (
        <div className='Product'>
            <div className="image-container">
                <img src={img} className="product-image" alt={`Image for ${name}`} />
            </div>
            <div className="product-info">
                <h2 className="info product-title">{name}</h2>
                <h2 className="info product-price">${price}</h2>
            </div>
            <div className="product-button-row">
                <button className="btn btn-product" onClick={ () => sendToEditForm(id)}>Edit</button>
                <button className="btn btn-product" onClick={ () => props.delete_product(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Product