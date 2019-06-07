import React, {Component} from 'react'
import axios from 'axios'
import Product from '../Product/Product'

export default class Dashboard extends Component {

    deleteProduct = id => {
        axios.delete(`/api/product/${id}`)
        .then(res => this.props.getInventory)
        .catch( err => console.log(err))
    }

    render(){
        return (
            <div>
                <h1>Dashboard</h1>
                {this.props.inventory.map( elem => {
                    return(
                    <Product key={elem.id} item={elem} deleteProduct={this.deleteProduct} />
                    )
                })}
            </div>
        )
    }
}