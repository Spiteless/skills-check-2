import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import axios from 'axios'

const fakeData = [
  {
    "id": 1,
    "name": "Calculator",
    "price": "100",
    "img": "https://images.pexels.com/photos/5775/calculator-scientific.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    "id": 2,
    "name": "Child's Homework, Currently Due",
    "price": "125",
    "img": "https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    "id": 3,
    "name": "Room with Chairs In it",
    "price": "500",
    "img": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inventory: [
        // ...fakeData
      ],
    }
    this.get_products = this.get_products.bind(this)
    this.add_product = this.add_product.bind(this)
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

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="app-row">
            <div className="app-col">
              <Dashboard inventory={this.state.inventory} />
            </div>
            <div className="app-col">
              <Form 
              add_product = {this.add_product}
              />
            </div>
          </div>

        </main>
      </div>
    );
  }
}

export default App;
