import React from 'react'
// import {Link} from 'react-router-dom'
import Product from '../Product/Product'


export default class Dashboard extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='Dashboard'>
                <div>
                <h1>Dashboard</h1>
                <Product/>
                </div>

            </div>
        )
    }
}