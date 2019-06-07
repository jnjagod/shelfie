import React, {Component} from 'react'
import axios from 'axios'
import './App.css'

import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'


class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: [],
      currentProduct: {}
    }
  }

  componentDidMount = () => {
    this.getInventory()
  }
  getInventory = () => {
    axios.get('/api/inventory')
    .then(res => this.setState({inventory: res.data}))
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Dashboard getInventory={this.getInventory} inventory={this.state.inventory} />
        <Form currentProduct={this.state.currentProduct} getInventory={this.getInventory} />
      </div>
    )
  }
}

export default App;
