import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inventory: [
        // ...fakeData
      ],
      // form: {
        name: "",
        price: "",
        img: "",
      // }
    }
    this.get_products = this.get_products.bind(this)
    this.add_product = this.add_product.bind(this)
    this.edit_product = this.edit_product.bind(this)
    this.delete_product = this.delete_product.bind(this)
    this.prepEditForm = this.prepEditForm.bind(this)
  }
  get_products = () => {
    axios.get('/api/products').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  add_product(product) {
    axios.post('/api/products', product).then(res =>
      this.setState({
        inventory: res.data
      }))
  } 

  componentDidMount() {
    console.log("fired")
    this.get_products()
  }

  edit_product(product) {
    const {id} = product.id
    axios.put('api/single/product/'+id, product).then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  delete_product(product_id) {
    // console.log("delete called with:", product_id)
    axios.delete('api/single/product/'+product_id).then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  prepEditForm(formData){
    // const newData = {...formData}
    console.log("prep edit form data:", formData)
    this.setState({
      name: formData.name,
      price: formData.price,
      img: formData.img,
    })
    console.log("new state from prepEdit", this.state)
}

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="app-row">
            <div className="app-col">
              <Dashboard
              inventory={this.state.inventory}
              prepEditForm={this.prepEditForm}
              delete_product={this.delete_product}
              />
            </div>
            <div className="app-col">
              <Form 
              add_product = {this.add_product}
              name = {this.state.name}
              img = {this.state.img}
              price = {this.state.price}
              />
            </div>
          </div>

        </main>
      </div>
    );
  }
}

export default App;
