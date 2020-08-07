import React from 'react'
// import {Link} from 'react-router-dom'
import Product from '../Product/Product'


function Dashboard(props) {
    console.log(props)
    const {inventory} = props

    const products = inventory.map( product => (
        <Product 
        key = {product.id}
        id = {product.id}
        name = {product.name}
        price = {product.price}
        img = {product.img}
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