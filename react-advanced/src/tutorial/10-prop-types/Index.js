import React from 'react'
import { useFetch } from '../9-custom-hooks/useFetch'
import Product from './Product'

const url = "https://course-api.com/react-prop-types-example"

const Index = () => {
    const { loading, products } = useFetch(url)
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <h2>Products</h2>
            <section className='products'>
                {products.map((product) => {
                    return <Product key={product.id} {...product} />
                })}
            </section>
        </div>
    )
}

export default Index
