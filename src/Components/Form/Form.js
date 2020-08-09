import React from 'react'
import './Form.css';
// import {Link} from 'react-router-dom'

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            img: props.img,
            price: props.price,
        }
        console.log("Form props:", this.props)
        console.log("Form state:", this.state)
        this.handleChange = this.handleChange.bind(this)
        this.cancel = this.cancel.bind(this)
    }



    handleChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
        console.log(this.state)
    }

    cancel() {
        const newState = {name: "", price: "", img: ""}
        this.setState(newState)
    }

    postProduct(){
        const newProduct = {
            name: this.props.name,
            price: this.props.price,
            img: this.props.img,
        }
        this.props.add_product(newProduct)
        this.cancel()
    }

    render() {
        return (
            <div className='Form'>
                <div className="form-container">
                    <img src='https://campussuite-storage.s3.amazonaws.com/prod/484005/2752018e-59b7-11e6-943a-22000bd8490f/2139479/6ac2a84e-d808-11ea-81b8-12ac6b7b4e67/optimizations/2097152' className="form-image-preview" alt="preview" />
                    <h2>Image Url:</h2>
                    <input type="text" value={this.props.img} name="img" onChange={this.props.handleChangeMain} />
                    <h2>Product Name:</h2>
                    <input type="text" value={this.props.name} name="name" onChange={this.props.handleChangeMain} />
                    <h2>Price:</h2>
                    <input type="text" value={this.props.price} name="price" onChange={this.props.handleChangeMain} />
                    <div className="form-button-row">
                        <button className="btn-cancel left" onClick={this.cancel}>Cancel</button>
                        <button className="btn-add right" onClick={() => this.postProduct()}>Add to Inventory</button>
                    </div>
                </div>
            </div>
        )
    }
}