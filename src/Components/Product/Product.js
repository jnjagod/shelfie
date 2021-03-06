import React from 'react'

export default function Product(props){
    let { id, imageUrl, name, price } = props.item
    return (
        <div>
            <h1>Product</h1>
            <div style={{
                width: '300px',
                height: '300px',
                margin: '0 auto',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: `url(${imageUrl})`
                }}></div>
            <div>
                <p>{name}</p>
                <p>${price}</p>
            </div>
            <button onClick={() => props.selectProduct(props.item)} >Edit</button>
            <button onClick={() => props.deleteProduct(id)} >Delete</button>
        </div>
    )
}