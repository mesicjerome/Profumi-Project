import React from 'react'
import {Button} from "antd";

function UserCardBlock(props) {



    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td>
                    <img style={{ width: '70px' }} alt="product" 
                    src={renderCartImage(product.images)} />
                    <br/>
                    <strong>{product.creator}</strong>
                    <br/>
                    {product.name}

                </td> 
                <td>{product.quantity} </td>
                <td> {product.price} €</td>
                <td><Button 
                type='danger' 
                onClick={()=> props.removeItem(product._id)}
                >Retirer </Button> </td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Produit</th>
                        <th>Quantité</th>
                        <th>Prix</th>
                        <th>Retirer du panier</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock