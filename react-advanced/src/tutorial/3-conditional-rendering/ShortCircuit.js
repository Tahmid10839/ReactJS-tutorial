import React, { useState } from 'react'

const ShortCircuit = () => {
    const [text, setText] = useState('')
    const firstValue = text || 'Hello World'
    const secondValue = text && 'Hello World'
    const [isError, setIsError] = useState(false)
    return (
        <>
            <h1>Short Circuit Example</h1>
            <h2>First Value: {firstValue}</h2>
            <h2>Second Value: {secondValue}</h2>
            <h3>{text || 'John Doe'}</h3>
            {text && <h3>Hello World</h3>}
            {!text && <h3>Hello World</h3>}
            <button className='btn' onClick={() => setIsError(!isError)}>Toggle Error</button>
            {isError && <h4>Error...</h4>}
            {isError ? <p>There is an error</p> : <p>There is no error</p>}
        </>
    )
}

export default ShortCircuit
