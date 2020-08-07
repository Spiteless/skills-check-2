import React from 'react'
// import {Link} from 'react-router-dom'
import Product from '../Product/Product'


function Dashboard(props) {
    console.log("dashboard props", props)
    const {inventory} = props

    const products = inventory.map( product => (
        <Product 
        key = {product.id}
        id = {product.id}
        name = {product.name}
        price = {product.price}
        img = {product.img}
        prepEditForm={props.prepEditForm}
        delete_product={props.delete_product}
        />
    ))

    return (
        <div className='Dashboard'>
            <div>
                { products }
            </div>

        </div>
    )
}

export default Dashboard