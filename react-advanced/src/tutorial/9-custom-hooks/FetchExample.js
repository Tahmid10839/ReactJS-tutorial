import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch';

const url = "https://course-api.com/javascript-store-products"

const FetchExample = () => {
    const { loading, products } = useFetch(url)
    console.log(products);

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <h2>Custom Hooks / useFetch Example</h2>
        </>
    )
}

export default FetchExample
