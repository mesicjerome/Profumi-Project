import React, { useEffect, useState } from 'react'
import { Button, Descriptions, Badge } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
        <div>
            <Descriptions 
            title="Detail du produit"
            >
            <Descriptions.Item label="Description" span={3}>
                <Badge>{Product.description}</Badge>
            </Descriptions.Item>
            <Descriptions.Item label="Notes olfactives" span={3}>
                <Badge>{Product.notes}</Badge>
            </Descriptions.Item>
                <Descriptions.Item label="Quantité"> {Product.size} ml</Descriptions.Item>
                <Descriptions.Item label="Prix"> {Product.price} €</Descriptions.Item>
                <Descriptions.Item label="Acheté">{Product.sold} fois</Descriptions.Item>
                
                
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p>Afin d'ajouter un produit à votre panier, n'oubliez pas de vous identifier</p>
            <br />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                
                <Button size="large" shape="round" type="danger"
                    onClick={addToCarthandler}
                >
                    Ajouter au panier
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo
