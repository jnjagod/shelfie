import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            id: null,
            imageUrl: '',
            name: '',
            price: 0
        }
    }

    componentDidUpdate(oldProps){
        let {id, imageUrl, name, price} = this.props.currentProduct
        if(oldProps.id !== this.props.currentProduct.id){
            this.setState({id, imageUrl, name, price})
        }
    }

    handleChange = e => {
        let { value, name } = e.target
    
        this.setState({
          [name]: value
        })
    }

    handleUpdate = () => {
        let { id, imageUrl, name, price } = this.state
        let product = {
            imageUrl,
            name,
            price
          }
          axios.put(`/api/product/${id}`, product)
            .then(res => {
              this.props.getInventory();
              this.clearInputs();
            })
            .catch(err => console.log(err))
    }

    clearInputs = () => {
        this.setState({
            imageUrl: '',
            name: '',
            price: 0
        })
    }

    handleCreate = () => {
        let {imageUrl, name, price} = this.state
        let product = {
            imageUrl,
            name,
            price
        }
        axios.post('/api/product', product)
        .then(res => {
            this.props.getInventory()
            this.clearInputs()
        }).catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <h1>Form</h1>
                <p>Image URL:</p>
                <input
                type="text"
                name="imageURL"
                onChange={this.handleChange}
                value={this.state.imageUrl} />
                <p>Product Name:</p>
                <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name} />
                <p>Price:</p>
                <input
                type="number"
                name="price"
                onChange={this.handleChange}
                value={this.state.price} />
                <button onClick={this.clearInputs} >Cancel</button>
                {this.state.id ?
                <button onClick={this.handleUpdate} >Save Changes</button>
                :   
                <button onClick={this.handleCreate} >Add to Inventory</button>
                }
            </div>
        )
    }
}