import React from 'react'
import './Form.css';
// import {Link} from 'react-router-dom'

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: "",
                src: "",
                price: "",
            }
        }
    }
    render() {
        return (
            <div className='Form'>
                <div className="form-container">
                    <img src='https://campussuite-storage.s3.amazonaws.com/prod/484005/2752018e-59b7-11e6-943a-22000bd8490f/2139479/6ac2a84e-d808-11ea-81b8-12ac6b7b4e67/optimizations/2097152' className="form-image-preview" alt="Image Preview" />
                    <h2>Image Url:</h2>
                    <input type="text" name="img" />
                    <h2>Product Name:</h2>
                    <input type="text" name="name" />
                    <h2>Price:</h2>
                    <input type="text" name="price" />
                </div>
            </div>
        )
    }
}