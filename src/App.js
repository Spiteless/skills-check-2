import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import axios from 'axios'

class App extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }
  get_products = () => {
    axios.get('/api/products').then( res => {
      this.setState({
        inventory: res.data
      })
      console.log(this.state)
    })
  }

  componentDidMount(){
    this.get_products()
  }

  render () {

    
      return (
        <div className="App">
          <Header/>
          <Dashboard/>
          <Form/>
        </div>
      );
  }
}

export default App;
