import React, { useCallback, useMemo, useState } from 'react'
import { useFetch } from '../9-custom-hooks/useFetch'

const url = "https://course-api.com/javascript-store-products"

const ReactMemo = () => {
    const { products } = useFetch(url)
    const [count, setCount] = useState(0)
    const [cart, setCart] = useState(0)

    const addToCart = useCallback(() => {
        setCart(cart + 1)
    }, [cart])

    const calculateMostExpensive = (data) => {
        return (
            data.reduce((total, item) => {
                const price = item.fields.price
                if (price >= total) {
                    total = price
                }
                return total
            }, 0) / 100
        )
    }

    const mostExpensive = useMemo(() =>
        calculateMostExpensive(products)
        , [products])

    return (
        <>
            <h1>Count: {count}</h1>
            <button className='btn' onClick={() => setCount(count + 1)}>Click Me</button>
            <h1 style={{ marginTop: '3rem' }}>Cart: {cart}</h1>
            <h1>Most Expensive: ${mostExpensive}</h1>
            <BigList products={products} addToCart={addToCart} />

        </>
    )
}

const BigList = React.memo(({ products, addToCart }) => {
    return (
        <section className='products'>
            {products.map((product) => {
                return <SingleProduct key={product.id} {...product} addToCart={addToCart} />
            })}
        </section>
    )
})

const SingleProduct = ({ fields, addToCart }) => {
    let { name, price } = fields
    price = price / 100
    const image = fields.image[0].url
    return (
        <article className='product'>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={addToCart}>Add To Cart</button>
        </article>
    )
}

export default ReactMemo
