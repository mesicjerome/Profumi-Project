import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Icon, Col, Card, Row } from 'antd';
import ImageSlider from  '../../utils/ImageSlider';
import CheckBox from './Sections/CheckBox';
import RadioBox from './Sections/RadioBox';
import { families, price } from './Sections/Datas';
import SearchFeature from './Sections/SearchFeature';

const { Meta } = Card;

function ShopPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState()
    
    const [Filters, setFilters] = useState({
        families: [],
        price: []
    })
    const [SearchTerms, setSearchTerms] = useState("")

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
        }

        getProducts(variables)

    }, [])

    const getProducts = (variables) => {
        Axios.post('/api/product/getProducts', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setProducts([...Products, ...response.data.products])
                    } else {
                        setProducts(response.data.products)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Probleme de recuperation des données')
                }
            })
    } 

    const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true

        }
        getProducts(variables)
        setSkip(skip)
    }

    const renderCards = Products.map((product, index) => {
        return <Col lg={6} md={8} xs={24}>
            <Card
                hoverable={true}
                cover={<a href={`/product/${product._id}`} > <ImageSlider images={product.images} /></a>}
            >
                <Meta
                    title={product.creator}
                    description={product.name}
                />

            </Card>
        </Col>
    })

        const showFilteredResults = (filters) => {
            const variables = {
                skip: 0,
                limit: Limit,
                filters: filters
    
            }
            getProducts(variables)
            setSkip(0)
    
        }

        const handlePrice = (value) => {
            const data = price;
            let array = [];
    
            for (let key in data) {
    
                if (data[key]._id === parseInt(value, 10)) {
                    array = data[key].array;
                }
            }
            console.log('array', array)
            return array
        }
        

    const handleFilters = (filters, category) => {
        const newFilters = { ...Filters }

        newFilters[category] = filters

        if (category === "price") {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues
        } 
        showFilteredResults(newFilters)
        setFilters(newFilters)
        
    }

    const updateSearchTerms = (newSearchTerm) => {

        const variables = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm
        }

        setSkip(0)
        setSearchTerms(newSearchTerm)

        getProducts(variables)
    }


    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>  Decouvrez nos parfums  <Icon type="like" />  </h2>
                
            </div>

            {/* Filters checkbox et radiobox */}
            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24} >
                    <CheckBox 
                        list={families}
                        handleFilters={filters => handleFilters(filters, "families")}
                    />
                </Col>
                <Col lg={12} xs={24}>
                    <RadioBox 
                        list={price}
                        handleFilters={filters => handleFilters(filters, "price")}
                    />
                </Col>
            </Row>


            {/* SearchFeature barre de recherche */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto' }}>

                <SearchFeature
                    refreshFunction={updateSearchTerms}
                />

            </div>

            {Products.length === 0 ?
                <div style={{ display: 'flex', height: '350px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>Aucun produits...</h2>
                </div> :
                <div>
                    <Row gutter={[16, 16]}>
                    
                    {renderCards}
                    </Row>
                </div>
            }
            <br />
            <br />

            {PostSize >= Limit &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={onLoadMore}>Charger plus</button>
                </div>
            }




        </div>
        
    )
}

export default ShopPage

